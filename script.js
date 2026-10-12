(() => {
  "use strict";
  const services = [
    {name:"Meta Ads",desc:"Demand creation across Facebook and Instagram, built around efficient acquisition.",tags:["Media buying","Creative testing"],icon:"◎",tone:"violet"},
    {name:"Google Ads",desc:"Capture high-intent demand across Search, Performance Max, Shopping and YouTube.",tags:["Search","Performance Max"],icon:"⌕",tone:"blue"},
    {name:"WordPress Engineering",desc:"Fast, secure business websites with clean architecture and room to scale.",tags:["Performance","CMS"],icon:"⌘",tone:"cyan"},
    {name:"Shopify Commerce",desc:"High-converting storefronts that remove friction and improve average order value.",tags:["D2C","Conversion"],icon:"◈",tone:"mint"},
    {name:"Elementor Pro",desc:"Polished, flexible WordPress builds that marketing teams can actually manage.",tags:["Rapid launch","Responsive UI"],icon:"▧",tone:"amber"},
    {name:"Full-Stack SEO",desc:"Technical foundations and search-led content designed for compounding growth.",tags:["Technical SEO","Content clusters"],icon:"⌁",tone:"green"},
    {name:"Local Search & GMB",desc:"Help high-intent nearby customers find, trust and contact your locations.",tags:["Maps visibility","Reviews"],icon:"⌖",tone:"cyan"},
    {name:"WhatsApp Automation",desc:"Useful customer journeys for lead triage, cart recovery and follow-up.",tags:["Cloud API","Workflows"],icon:"↗",tone:"green"},
    {name:"Social Media",desc:"Build brand relevance through thoughtful content and short-form storytelling.",tags:["Reels & Shorts","Community"],icon:"◌",tone:"pink"},
    {name:"Brand & Graphic Design",desc:"Distinctive visual systems and practical assets that your whole team can use.",tags:["Identity","Design systems"],icon:"✳",tone:"amber"},
    {name:"Omnichannel Growth",desc:"Connect acquisition, conversion and retention around a shared growth plan.",tags:["Attribution","Lifecycle"],icon:"⤢",tone:"violet"},
    {name:"Blogging & Editorial",desc:"Expert-led content that answers search intent and earns lasting attention.",tags:["Editorial","Lead magnets"],icon:"¶",tone:"blue"},
    {name:"Ad Creative & UGC Lab",desc:"Direct-response concepts, UGC video and motion built for rapid creative testing.",tags:["UGC video","Static & motion"],icon:"▶",tone:"pink"}
  ];
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const serviceGrid = $("#service-grid");
  const serviceOptions = $("#service-options");
  const formServices = $("#form-services");
  const budget = $("#budget");
  const budgetLabel = $("#budget-label");
  const selectedCount = $("#selected-count");
  const selected = new Set(["Meta Ads","Google Ads","Shopify Commerce","Full-Stack SEO"]);
  const money = n => n.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
  const compact = n => n >= 1000000 ? (n/1000000).toFixed(1).replace(/\.0$/,"")+"M" : Math.round(n/1000)+"k";

  serviceGrid.innerHTML = services.map((s,i) => `
    <article class="service-card tone-${s.tone} reveal">
      <div class="service-top"><span class="service-icon" aria-hidden="true">${s.icon}</span><span class="service-number">${String(i+1).padStart(2,"0")} / 13</span></div>
      <h3>${s.name}</h3><p>${s.desc}</p>
      <div class="tag-row">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <a class="card-link" href="#contact" data-service="${s.name}">Explore service <span>↗</span></a>
    </article>`).join("");

  serviceOptions.innerHTML = services.map((s,i)=>`<button type="button" class="service-option" data-option="${s.name}" aria-pressed="${selected.has(s.name)}">${String(i+1).padStart(2,"0")} · ${s.name}</button>`).join("");
  formServices.innerHTML = services.map((s,i)=>`<label><input type="checkbox" name="services" value="${s.name}" ${i===0||i===1?"checked":""}> ${s.name}</label>`).join("");

  function updateEstimator(){
    const spend = Number(budget.value);
    const count = selected.size;
    budgetLabel.value = money(spend);
    budgetLabel.textContent = money(spend);
    selectedCount.textContent = count + (count===1?" discipline selected":" disciplines selected");
    // Planning-only assumptions for an illustrative interactive calculator.
    const efficiency = 2.8 + Math.min(count,8)*0.25;
    const aggressive = Math.min(6.2, efficiency + 0.8);
    $("#reach").textContent = compact(spend * (21 + Math.min(count,8)*4.5));
    $("#roas").textContent = efficiency.toFixed(1)+"–"+aggressive.toFixed(1)+"x";
    $("#revenue").textContent = money(spend * ((efficiency+aggressive)/2));
    const lift = 7 + count*2;
    const points = [88,82,70,58,45,28,Math.max(8,18-lift/2)].map((v,i)=>Math.max(7,v - (i*count*.55)));
    const line = points.map((y,i)=>(i===0?"M":"L")+(i*60)+" "+y).join(" ");
    $("#spark-line").setAttribute("d",line);
    $("#spark-area").setAttribute("d",line+" L360 100 L0 100Z");
    $$(".service-option").forEach(btn=>btn.setAttribute("aria-pressed",String(selected.has(btn.dataset.option))));
  }
  serviceOptions.addEventListener("click",e=>{
    const btn=e.target.closest("[data-option]");
    if(!btn)return;
    const name=btn.dataset.option;
    if(selected.has(name)) selected.delete(name); else selected.add(name);
    updateEstimator();
  });
  budget.addEventListener("input",updateEstimator);
  updateEstimator();

  // When a service CTA is selected, prefill the enquiry and scroll to the form.
  document.addEventListener("click",e=>{
    const link=e.target.closest("[data-service]");
    if(!link)return;
    const name=link.dataset.service;
    const matching=$$('input[name="services"]',formServices).find(input=>input.value===name);
    if(matching)matching.checked=true;
  });

  const menuToggle=$(".menu-toggle"), navigation=$("#navigation");
  menuToggle.addEventListener("click",()=>{
    const open=navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded",String(open));
    menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  $$("#navigation a").forEach(a=>a.addEventListener("click",()=>{
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
    menuToggle.setAttribute("aria-label","Open navigation");
  }));

  const revealItems=$$(".reveal");
  if("IntersectionObserver" in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
      });
    },{threshold:.12,rootMargin:"0px 0px -25px 0px"});
    revealItems.forEach(el=>observer.observe(el));
  }else revealItems.forEach(el=>el.classList.add("visible"));

  const countItems=$$("[data-count]");
  function animateCount(el){
    if(el.dataset.done)return;el.dataset.done="1";
    const target=Number(el.dataset.count),suffix=el.dataset.suffix||"",prefix=el.textContent.trim().startsWith("$")?"$":"";
    const start=performance.now(),duration=1100;
    const tick=now=>{
      const t=Math.min(1,(now-start)/duration),eased=1-Math.pow(1-t,3);
      const value=target*eased;
      el.textContent=prefix+(target%1?value.toFixed(target<10?2:1):Math.round(value))+suffix;
      if(t<1)requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  if("IntersectionObserver" in window){
    const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){animateCount(entry.target);countObserver.unobserve(entry.target);}
    }),{threshold:.5});
    countItems.forEach(el=>countObserver.observe(el));
  }else countItems.forEach(animateCount);

  const toast=$("#toast");
  function showToast(message){
    toast.textContent=message;toast.classList.add("show");
    window.setTimeout(()=>toast.classList.remove("show"),4200);
  }
  $("#lead-form").addEventListener("submit",e=>{
    e.preventDefault();
    const form=e.currentTarget;
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const requested=[...form.querySelectorAll('input[name="services"]:checked')].map(i=>i.value);
    const subject="ApexGrowth — Growth Audit Request";
    const body=[
      "New growth audit enquiry","",
      "Name: "+data.get("name"),
      "Email: "+data.get("email"),
      "Website: "+(data.get("website")||"Not provided"),
      "Monthly ad spend: "+data.get("budget"),
      "Services: "+(requested.join(", ")||"To be discussed"),
      "Notes: "+(data.get("notes")||"None"),"",
      "Please connect a form backend/CRM before using this form for automated lead capture."
    ].join("\n");
    window.location.href="mailto:hello@apexgrowth.example?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
    showToast("Your email app should open with the enquiry details. This demo does not store submissions.");
  });
  $("#year").textContent=new Date().getFullYear();
})();