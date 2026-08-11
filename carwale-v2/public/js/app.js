const API = '';

const CAR_IMAGES = {
  'maruti-swift':        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2018_Suzuki_Swift_1.0T_SZ5_Boosterjet_SHVS_%28Speedy_Blue%29_front_8.15.18.jpg/320px-2018_Suzuki_Swift_1.0T_SZ5_Boosterjet_SHVS_%28Speedy_Blue%29_front_8.15.18.jpg',
  'maruti-baleno':       'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2022_Maruti_Suzuki_Baleno_Alpha_AT_%28India%29_front.jpg/320px-2022_Maruti_Suzuki_Baleno_Alpha_AT_%28India%29_front.jpg',
  'maruti-dzire':        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Maruti_Suzuki_Dzire_ZXi_%28India%2C_2023%29_front.jpg/320px-Maruti_Suzuki_Dzire_ZXi_%28India%2C_2023%29_front.jpg',
  'maruti-fronx':        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Maruti_Suzuki_Fronx_Alpha_AT_%28India%29_front.jpg/320px-Maruti_Suzuki_Fronx_Alpha_AT_%28India%29_front.jpg',
  'maruti-brezza':       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Maruti_Suzuki_Vitara_Brezza_ZDi%2B_Dual_Tone_%28India%29_front.jpg/320px-Maruti_Suzuki_Vitara_Brezza_ZDi%2B_Dual_Tone_%28India%29_front.jpg',
  'maruti-grand-vitara': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Maruti_Suzuki_Grand_Vitara_Alpha_Plus_Hybrid_%28India%29_front.jpg/320px-Maruti_Suzuki_Grand_Vitara_Alpha_Plus_Hybrid_%28India%29_front.jpg',
  'maruti-wagon-r':      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2019_Maruti_Suzuki_Wagon_R_VXI%2B_1.2_front.jpg/320px-2019_Maruti_Suzuki_Wagon_R_VXI%2B_1.2_front.jpg',
  'maruti-ertiga':       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/2019_Maruti_Suzuki_Ertiga_ZXI%2B_front.jpg/320px-2019_Maruti_Suzuki_Ertiga_ZXI%2B_front.jpg',
  'tata-punch':          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tata_Punch_Creative_iCNG_AT_%28India%29_front.jpg/320px-Tata_Punch_Creative_iCNG_AT_%28India%29_front.jpg',
  'tata-nexon':          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tata_Nexon_Creative_%2B_S_Dark_Edition_%28India%2C_facelift%29_front.jpg/320px-Tata_Nexon_Creative_%2B_S_Dark_Edition_%28India%2C_facelift%29_front.jpg',
  'tata-tiago':          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/2020_Tata_Tiago_XZ%2B_front.jpg/320px-2020_Tata_Tiago_XZ%2B_front.jpg',
  'tata-harrier':        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tata_Harrier_XZ%2B_%28facelift%2C_India%29_front.jpg/320px-Tata_Harrier_XZ%2B_%28facelift%2C_India%29_front.jpg',
  'tata-safari':         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tata_Safari_Gold_%28India%29_front.jpg/320px-Tata_Safari_Gold_%28India%29_front.jpg',
  'tata-punch-ev':       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tata_Punch_EV_Empowered%2B_Long_Range_%28India%29_front.jpg/320px-Tata_Punch_EV_Empowered%2B_Long_Range_%28India%29_front.jpg',
  'tata-harrier-ev':     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tata_Harrier_EV_%28India%29_front.jpg/320px-Tata_Harrier_EV_%28India%29_front.jpg',
  'hyundai-creta':       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2024_Hyundai_Creta_%28SU2%2C_facelift%29%2C_front_8.27.24.jpg/320px-2024_Hyundai_Creta_%28SU2%2C_facelift%29%2C_front_8.27.24.jpg',
  'hyundai-venue':       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2022_Hyundai_Venue_N_Line_1.0T_DCT_%28QX%2C_India%29_front.jpg/320px-2022_Hyundai_Venue_N_Line_1.0T_DCT_%28QX%2C_India%29_front.jpg',
  'hyundai-verna':       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/2023_Hyundai_Verna_%28SX%2B_IVT%2C_India%29_front.jpg/320px-2023_Hyundai_Verna_%28SX%2B_IVT%2C_India%29_front.jpg',
  'hyundai-i20':         'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2020_Hyundai_i20_%28BC3%29_1.0T-GDi_N_Line_DCT_%28UK%29_front_8.17.20.jpg/320px-2020_Hyundai_i20_%28BC3%29_1.0T-GDi_N_Line_DCT_%28UK%29_front_8.17.20.jpg',
  'kia-seltos':          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2023_Kia_Seltos_X-Line_HTX%2B_%28India%2C_facelift%29_front.jpg/320px-2023_Kia_Seltos_X-Line_HTX%2B_%28India%2C_facelift%29_front.jpg',
  'kia-sonet':           'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/2021_Kia_Sonet_GTX%2B_DCT_front.jpg/320px-2021_Kia_Sonet_GTX%2B_DCT_front.jpg',
  'mahindra-scorpio-n':  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mahindra_Scorpio-N_Z8_L_%28India%29_front.jpg/320px-Mahindra_Scorpio-N_Z8_L_%28India%29_front.jpg',
  'mahindra-thar':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mahindra_Thar_LX_Hard_Top_Diesel_MT_%28India%29_front.jpg/320px-Mahindra_Thar_LX_Hard_Top_Diesel_MT_%28India%29_front.jpg',
  'mahindra-thar-roxx':  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mahindra_Thar_ROXX_MX5_4WDMT_%28India%29_front.jpg/320px-Mahindra_Thar_ROXX_MX5_4WDMT_%28India%29_front.jpg',
  'mahindra-xuv-3xo':    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mahindra_XUV_3XO_AX7_L_%28India%29_front.jpg/320px-Mahindra_XUV_3XO_AX7_L_%28India%29_front.jpg',
  'mahindra-be-6':       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Mahindra_BE_6e_%28India%29_front.jpg/320px-Mahindra_BE_6e_%28India%29_front.jpg',
  'toyota-innova-hycross':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Toyota_Innova_Hycross_ZX%28O%29_Hybrid_%28India%29_front.jpg/320px-Toyota_Innova_Hycross_ZX%28O%29_Hybrid_%28India%29_front.jpg',
  'toyota-glanza':       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2022_Toyota_Glanza_V_AT_%28India%29_front.jpg/320px-2022_Toyota_Glanza_V_AT_%28India%29_front.jpg',
  'toyota-hyryder':      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Toyota_Urban_Cruiser_Hyryder_V_Hybrid_%28India%29_front.jpg/320px-Toyota_Urban_Cruiser_Hyryder_V_Hybrid_%28India%29_front.jpg',
  'skoda-kylaq':         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Skoda_Kylaq_Style_%28India%29_front.jpg/320px-Skoda_Kylaq_Style_%28India%29_front.jpg',
  'skoda-slavia':        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2022_Skoda_Slavia_Style_1.5_TSI_AT_%28India%29_front.jpg/320px-2022_Skoda_Slavia_Style_1.5_TSI_AT_%28India%29_front.jpg',
  'volkswagen-taigun':   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Volkswagen_Taigun_GT_Plus_%28India%29_front.jpg/320px-Volkswagen_Taigun_GT_Plus_%28India%29_front.jpg',
  'volkswagen-virtus':   'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2022_Volkswagen_Virtus_GT_1.5_TSI_DSG_%28India%29_front.jpg/320px-2022_Volkswagen_Virtus_GT_1.5_TSI_DSG_%28India%29_front.jpg',
  'honda-amaze':         'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Honda_Amaze_V_CVT_%28facelift%2C_India%29_front.jpg/320px-2021_Honda_Amaze_V_CVT_%28facelift%2C_India%29_front.jpg',
  'honda-elevate':       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Honda_Elevate_ZX_CVT_%28India%29_front.jpg/320px-Honda_Elevate_ZX_CVT_%28India%29_front.jpg',
  'renault-kwid':        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2019_Renault_Kwid_CLIMBER_AMT_front.jpg/320px-2019_Renault_Kwid_CLIMBER_AMT_front.jpg',
  'renault-triber':      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Renault_Triber_RXZ_AMT_%28India%2C_facelift%29_front.jpg/320px-Renault_Triber_RXZ_AMT_%28India%2C_facelift%29_front.jpg',
  'renault-duster':      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2024_Renault_Duster_%28HJD%2C_India%29%2C_front_11.1.24.jpg/320px-2024_Renault_Duster_%28HJD%2C_India%29%2C_front_11.1.24.jpg',
  'mg-windsor-ev':       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/MG_Windsor_EV_Excite_%28India%29_front.jpg/320px-MG_Windsor_EV_Excite_%28India%29_front.jpg',
  'jeep-compass':        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2021_Jeep_Compass_Limited_%28India%2C_facelift%29_front.jpg/320px-2021_Jeep_Compass_Limited_%28India%2C_facelift%29_front.jpg',
};

const carEmoji  = (f) => f==='Electric'?'⚡🚗':f==='Hybrid'?'🌿🚗':'🚗';
const brandEmoji= {'Maruti Suzuki':'🔵','Tata':'🦁','Mahindra':'🟠','Hyundai':'🔷','Toyota':'🔴','Kia':'⚡','Skoda':'🟢','BMW':'🏎️','Renault':'💎','Nissan':'⭕','Mercedes-Benz':'⭐','MG':'🌟','Honda':'🏍️','Volkswagen':'🔵','Audi':'💫','Jeep':'🚙','Citroen':'🇫🇷'};
const cityEmoji = {'Delhi':'🏛️','Mumbai':'🌆','Bangalore':'🌳','Pune':'🏔️','Hyderabad':'🕌','Chennai':'🌊','Kolkata':'🌉','Ahmedabad':'🏺','Jaipur':'🏯','Gurgaon':'🏙️','Lucknow':'🕍'};

let allCars=[],allUsedCars=[],allNews=[],allBrands=[];
let currentBudgetTab='under10',currentBodyTab='SUV',currentFuelTab='Electric';
let currentLaunchTab='upcoming',currentNewsTab='News',carsPage=1;
const PAGE_SIZE=12;

/* ── WISHLIST ── */
function getWishlist(){ return JSON.parse(localStorage.getItem('cw_wishlist')||'[]'); }
function toggleWishlist(slug,evt){
  if(evt) evt.stopPropagation();
  const user=getUser();
  if(!user){showToast('Please login to save cars ❤️','error');setTimeout(()=>window.location.href='/login',1000);return;}
  const list=getWishlist(),idx=list.indexOf(slug);
  if(idx===-1){list.push(slug);showToast('Added to wishlist ❤️','success');}
  else{list.splice(idx,1);showToast('Removed from wishlist','');}
  localStorage.setItem('cw_wishlist',JSON.stringify(list));
  document.querySelectorAll('.wish-'+slug).forEach(b=>{b.textContent=list.includes(slug)?'❤️':'🤍';b.classList.toggle('active',list.includes(slug));});
  if(document.getElementById('section-wishlist').classList.contains('active')) renderWishlist();
}
function renderWishlist(){
  const cars=allCars.filter(c=>getWishlist().includes(c.slug));
  const el=document.getElementById('wishlistGrid');
  if(!el) return;
  if(!cars.length){el.innerHTML='<div class="loading-row">No saved cars yet. Click ❤️ on any car to save it!</div>';return;}
  renderCarCards(cars,el);
}

/* ── AUTH ── */
function getToken(){ return localStorage.getItem('cw_token'); }
function getUser(){ try{return JSON.parse(localStorage.getItem('cw_user'));}catch{return null;} }

function initAuthUI(){
  const user=getUser();
  const g=document.getElementById('guestBtns'),u=document.getElementById('userMenu');
  const mg=document.getElementById('mobileGuestLinks'),mu=document.getElementById('mobileUserLinks');
  if(!g||!u) return;
  if(user){
    g.style.display='none'; u.style.display='block';
    document.getElementById('userNameDisplay').textContent=user.name.split(' ')[0];
    document.getElementById('userAvatar').textContent=user.name[0].toUpperCase();
    document.getElementById('dropdownName').textContent=user.name;
    document.getElementById('dropdownEmail').textContent=user.email;
    if(mg) mg.style.display='none';
    if(mu) mu.style.display='block';
  } else {
    g.style.display='flex'; u.style.display='none';
    if(mg) mg.style.display='block';
    if(mu) mu.style.display='none';
  }
}
function toggleUserDropdown(){ document.getElementById('userDropdown').classList.toggle('open'); }
document.addEventListener('click',e=>{ const m=document.getElementById('userDropdown'); if(m&&!e.target.closest('#userMenu')) m.classList.remove('open'); });
function doLogout(){ localStorage.removeItem('cw_token'); localStorage.removeItem('cw_user'); showToast('Logged out 👋'); initAuthUI(); showSection('home'); }

/* ── PROFILE ── */
function loadProfile(){
  const user=getUser(); if(!user) return;
  const nd=document.getElementById('profileNameDisplay'), ed=document.getElementById('profileEmailDisplay');
  if(nd) nd.textContent=user.name;
  if(ed) ed.textContent=user.email;
  const pn=document.getElementById('profileName'),pp=document.getElementById('profilePhone'),pc=document.getElementById('profileCity');
  if(pn) pn.value=user.name||'';
  if(pp) pp.value=user.phone||'';
  if(pc) pc.value=user.city||'';
}
async function updateProfile(){
  const token=getToken(); if(!token){window.location.href='/login';return;}
  const body={name:document.getElementById('profileName').value.trim(),phone:document.getElementById('profilePhone').value.trim(),city:document.getElementById('profileCity').value};
  try{
    const res=await fetch('/api/auth/me',{method:'PUT',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify(body)});
    const data=await res.json();
    const msg=document.getElementById('profileMsg');
    if(data.success){localStorage.setItem('cw_user',JSON.stringify(data.user));initAuthUI();msg.className='profile-success';msg.textContent='✅ Profile updated!';}
    else{msg.className='profile-error';msg.textContent='❌ '+data.message;}
    msg.style.display='block'; setTimeout(()=>msg.style.display='none',3000);
  }catch{showToast('Server error','error');}
}
async function changePassword(){
  const token=getToken(); if(!token) return;
  const cp=document.getElementById('currentPwd').value,np=document.getElementById('newPwd').value,cf=document.getElementById('confirmPwd').value;
  const msg=document.getElementById('pwdMsg');
  if(np!==cf){msg.className='profile-error';msg.textContent='❌ Passwords do not match';msg.style.display='block';return;}
  if(np.length<6){msg.className='profile-error';msg.textContent='❌ Min 6 characters';msg.style.display='block';return;}
  try{
    const res=await fetch('/api/auth/change-password',{method:'PUT',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({currentPassword:cp,newPassword:np})});
    const data=await res.json();
    if(data.success){msg.className='profile-success';msg.textContent='✅ '+data.message;document.getElementById('currentPwd').value='';document.getElementById('newPwd').value='';document.getElementById('confirmPwd').value='';}
    else{msg.className='profile-error';msg.textContent='❌ '+data.message;}
    msg.style.display='block'; setTimeout(()=>msg.style.display='none',3000);
  }catch{showToast('Server error','error');}
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded',()=>{ initAuthUI(); loadEverything(); populateSellForm(); populateBrandFilter(); });
async function loadEverything(){
  await Promise.all([fetchAllCars(),fetchAllUsedCars(),fetchAllNews(),fetchAllBrands()]);
  renderStats(); renderTrendingCars(); renderBudgetCars(); renderBrands();
  renderUpcomingCars(); renderFuelCars(); renderCities(); renderHomeNews();
  renderAllCarsGrid(); renderUsedCarsGrid(); renderFullNews();
}

/* ── API ── */
async function fetchAllCars(){ try{const r=await fetch('/api/cars?limit=200');const d=await r.json();if(d.success)allCars=d.data;}catch{} if(!allCars.length)allCars=getFallbackCars(); }
async function fetchAllUsedCars(){ try{const r=await fetch('/api/used-cars?limit=100');const d=await r.json();if(d.success)allUsedCars=d.data;}catch{} if(!allUsedCars.length)allUsedCars=getFallbackUsedCars(); }
async function fetchAllNews(){ try{const r=await fetch('/api/news?limit=50');const d=await r.json();if(d.success)allNews=d.data;}catch{} if(!allNews.length)allNews=getFallbackNews(); }
async function fetchAllBrands(){ try{const r=await fetch('/api/brands?popular=true');const d=await r.json();if(d.success)allBrands=d.data;}catch{} if(!allBrands.length)allBrands=getFallbackBrands(); }

/* ── STATS ── */
function renderStats(){ const cs=document.getElementById('statCars'),us=document.getElementById('statUsed'); if(cs)animateCount(cs,allCars.length); if(us)animateCount(us,allUsedCars.length); }
function animateCount(el,target){ let v=0;const s=Math.ceil(target/30),t=setInterval(()=>{v=Math.min(v+s,target);el.textContent=v+'+';if(v>=target)clearInterval(t);},40); }

/* ── NAV ── */
function showSection(name,linkEl){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  const sec=document.getElementById('section-'+name); if(sec) sec.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  if(linkEl) linkEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='profile') loadProfile();
  if(name==='wishlist') renderWishlist();
}
function toggleMobileMenu(){ document.getElementById('mobileMenu').classList.toggle('open'); }
function setSearchTab(btn){ document.querySelectorAll('.stab').forEach(b=>b.classList.remove('active'));btn.classList.add('active'); }
function doHeroSearch(){ const q=document.getElementById('heroSearch').value; showSection('new-cars'); setTimeout(()=>{document.getElementById('carsSearch').value=q;filterCars();},100); }
function quickFilter(body='',fuel='',_label='',max=''){ showSection('new-cars'); setTimeout(()=>{if(body)document.getElementById('carsBodyType').value=body;if(fuel)document.getElementById('carsFuelType').value=fuel;if(max)document.getElementById('carsBudget').value=max;filterCars();},100); }

/* ── IMAGE HELPER ── */
function getCarImgTag(car){
  const url=car.image||CAR_IMAGES[car.slug]||'';
  if(url) return `<img src="${url}" alt="${car.model||''}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><span style="display:none;font-size:2.5rem;width:100%;height:100%;align-items:center;justify-content:center">${carEmoji(car.fuelType)}</span>`;
  return `<span style="font-size:2.5rem">${carEmoji(car.fuelType)}</span>`;
}

/* ── TRENDING ── */
function renderTrendingCars(){
  const tr=allCars.filter(c=>c.isTrending).slice(0,12),el=document.getElementById('trendingCars');
  if(!el) return;
  if(!tr.length){el.innerHTML='<div class="loading-row">No trending cars</div>';return;}
  el.innerHTML=tr.map(c=>`<div class="trend-card" onclick="openCarModal('${c.slug||c._id}')"><div class="trend-img">${getCarImgTag(c)}</div><div class="trend-name">${c.brand}<br/>${c.model}</div></div>`).join('');
}

/* ── BUDGET / BODY TABS ── */
function setBudgetTab(btn,tab){ document.querySelectorAll('.btab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentBudgetTab=tab;renderBudgetCars(); }
function setBodyTab(btn,type){ document.querySelectorAll('.body-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentBodyTab=type;renderBudgetCars(); }
function renderBudgetCars(){
  const ranges={under10:[0,1e6],'10to20':[1e6,2e6],'20to30':[2e6,3e6],luxury:[3e6,Infinity]};
  const [mn,mx]=ranges[currentBudgetTab];
  let f=allCars.filter(c=>c.priceMin>=mn&&c.priceMin<mx);
  if(currentBodyTab) f=f.filter(c=>c.bodyType===currentBodyTab);
  const el=document.getElementById('budgetCars'); if(el) renderCarCards(f.slice(0,8),el);
}

/* ── BRANDS ── */
function renderBrands(){
  const el=document.getElementById('brandsGrid'); if(!el) return;
  const brands=allBrands.length?allBrands:getFallbackBrands();
  el.innerHTML=brands.map(b=>`<div class="brand-card" onclick="filterByBrand('${b.name}')"><div class="brand-icon">${brandEmoji[b.name]||'🚗'}</div><div class="brand-name">${b.name}</div><div class="brand-count">${b.carCount?b.carCount+' cars':''}</div></div>`).join('');
}
function filterByBrand(brand){ showSection('new-cars'); setTimeout(()=>{const s=document.getElementById('carsBrand');if(s){s.value=brand;filterCars();}},100); }

/* ── UPCOMING ── */
function setLaunchTab(btn,tab){ document.querySelectorAll('.ltab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentLaunchTab=tab;renderUpcomingCars(); }
function renderUpcomingCars(){
  const cars=currentLaunchTab==='upcoming'?allCars.filter(c=>c.isUpcoming||c.category==='upcoming').slice(0,8):allCars.filter(c=>!c.isUpcoming&&c.category==='new').sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,8);
  const el=document.getElementById('upcomingCars'); if(el) renderCarCards(cars,el,true);
}

/* ── FUEL TABS ── */
function setFuelTab(btn,fuel){ document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentFuelTab=fuel;renderFuelCars(); }
function renderFuelCars(){ const cars=allCars.filter(c=>c.fuelType===currentFuelTab).slice(0,8),el=document.getElementById('fuelCars');if(el) renderCarCards(cars,el); }

/* ── CITIES ── */
function renderCities(){
  const cities=[{name:'Delhi',count:'13,600+',from:'₹25,000'},{name:'Mumbai',count:'11,000+',from:'₹30,000'},{name:'Bangalore',count:'7,300+',from:'₹45,000'},{name:'Pune',count:'6,100+',from:'₹45,000'},{name:'Hyderabad',count:'6,200+',from:'₹29,564'},{name:'Ahmedabad',count:'4,400+',from:'₹40,000'},{name:'Chennai',count:'4,200+',from:'₹45,000'},{name:'Kolkata',count:'2,500+',from:'₹45,000'},{name:'Gurgaon',count:'5,600+',from:'₹40,000'},{name:'Jaipur',count:'2,200+',from:'₹30,000'},{name:'Lucknow',count:'3,100+',from:'₹40,000'}];
  const el=document.getElementById('citiesGrid'); if(!el) return;
  el.innerHTML=cities.map(c=>`<div class="city-card" onclick="filterUsedByCity('${c.name}')"><div class="city-icon">${cityEmoji[c.name]||'🏙️'}</div><div class="city-name">${c.name}</div><div class="city-count">${c.count} Cars</div><div class="city-from">From ${c.from}</div></div>`).join('');
}
function filterUsedByCity(city){ showSection('used-cars'); setTimeout(()=>{const s=document.getElementById('usedCity');if(s){s.value=city;filterUsedCars();}},100); }

/* ── NEWS ── */
function setNewsTab(btn,cat){ document.querySelectorAll('.ntab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentNewsTab=cat;renderHomeNews(); }
function renderHomeNews(){ const news=allNews.filter(n=>n.category===currentNewsTab).slice(0,3),el=document.getElementById('newsGrid');if(el) renderNewsCards(news,el); }
function filterNews(cat,btn){ document.querySelectorAll('.news-cat-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderFullNews(cat?allNews.filter(n=>n.category===cat):allNews); }
function renderFullNews(arr=allNews){ const el=document.getElementById('newsFullGrid');if(el) renderNewsCards(arr,el); }

/* ── NEW CARS PAGE ── */
function filterCars(){ carsPage=1; renderAllCarsGrid(); }
function getFilteredCars(){
  const search=(document.getElementById('carsSearch')?.value||'').toLowerCase();
  const body=document.getElementById('carsBodyType')?.value||'';
  const fuel=document.getElementById('carsFuelType')?.value||'';
  const budget=document.getElementById('carsBudget')?.value||'';
  const brand=document.getElementById('carsBrand')?.value||'';
  return allCars.filter(c=>{
    if(search&&!`${c.brand} ${c.model} ${c.name||''}`.toLowerCase().includes(search)) return false;
    if(body&&c.bodyType!==body) return false;
    if(fuel&&c.fuelType!==fuel) return false;
    if(budget&&c.priceMin>Number(budget)) return false;
    if(brand&&c.brand!==brand) return false;
    return true;
  });
}
function renderAllCarsGrid(){
  const filtered=getFilteredCars();
  const info=document.getElementById('carsResultsInfo'); if(info) info.textContent=`Showing ${filtered.length} cars`;
  const start=(carsPage-1)*PAGE_SIZE,el=document.getElementById('allCarsGrid');
  if(el) renderCarCards(filtered.slice(start,start+PAGE_SIZE),el);
  renderPagination(filtered.length);
}
function renderPagination(total){
  const pages=Math.ceil(total/PAGE_SIZE),el=document.getElementById('carsPagination');
  if(!el||pages<=1){if(el)el.innerHTML='';return;}
  el.innerHTML=Array.from({length:pages},(_,i)=>`<button class="page-btn${i+1===carsPage?' active':''}" onclick="goToPage(${i+1})">${i+1}</button>`).join('');
}
function goToPage(p){ carsPage=p; renderAllCarsGrid(); document.getElementById('section-new-cars')?.scrollIntoView({behavior:'smooth'}); }
function populateBrandFilter(){
  const brands=[...new Set(getFallbackCars().map(c=>c.brand))].sort();
  const opts=brands.map(b=>`<option value="${b}">${b}</option>`).join('');
  const s1=document.getElementById('carsBrand'),s2=document.getElementById('sellBrand');
  if(s1) s1.innerHTML=`<option value="">All Brands</option>${opts}`;
  if(s2) s2.innerHTML=`<option value="">Select Brand</option>${opts}`;
}

/* ── USED CARS PAGE ── */
function filterUsedCars(){
  const search=(document.getElementById('usedSearch')?.value||'').toLowerCase();
  const city=document.getElementById('usedCity')?.value||'';
  const fuel=document.getElementById('usedFuel')?.value||'';
  const budget=document.getElementById('usedBudget')?.value||'';
  const f=allUsedCars.filter(c=>{
    if(search&&!`${c.brand} ${c.model}`.toLowerCase().includes(search)) return false;
    if(city&&c.city!==city) return false;
    if(fuel&&c.fuelType!==fuel) return false;
    if(budget&&c.price>Number(budget)) return false;
    return true;
  });
  const info=document.getElementById('usedResultsInfo'); if(info) info.textContent=`Showing ${f.length} used cars`;
  const el=document.getElementById('usedCarsGrid'); if(el) renderUsedCarCards(f,el);
}
function renderUsedCarsGrid(){ const el=document.getElementById('usedCarsGrid'),info=document.getElementById('usedResultsInfo'); if(info)info.textContent=`Showing ${allUsedCars.length} used cars`; if(el) renderUsedCarCards(allUsedCars,el); }

/* ── CAR CARDS ── */
function renderCarCards(cars,el,showLaunch=false){
  if(!cars.length){el.innerHTML='<div class="loading-row">No cars found matching your criteria.</div>';return;}
  const wl=getWishlist();
  el.innerHTML=cars.map(c=>{
    const slug=c.slug||c._id;
    const minL=(c.priceMin/1e5).toFixed(2);
    const maxL=c.priceMax?` – ₹${(c.priceMax/1e5).toFixed(2)} Lakh`:' Lakh onwards';
    const fcls=c.fuelType==='Electric'?'fuel-electric':c.fuelType==='Hybrid'?'fuel-hybrid':c.fuelType==='Diesel'?'fuel-diesel':'';
    const stars='★'.repeat(Math.round(c.rating||4))+'☆'.repeat(5-Math.round(c.rating||4));
    const wished=wl.includes(slug);
    const badge=c.isUpcoming?`<div class="car-card-badge upcoming">Upcoming</div>`:c.isTrending?`<div class="car-card-badge">Trending</div>`:'';
    return `<div class="car-card" onclick="openCarModal('${slug}')">
      <div class="car-card-img" style="overflow:hidden;position:relative">
        ${badge}
        <button class="car-card-wish wish-${slug}${wished?' active':''}" onclick="toggleWishlist('${slug}',event)" title="Wishlist">${wished?'❤️':'🤍'}</button>
        ${getCarImgTag(c)}
      </div>
      <div class="car-card-body">
        <div class="car-card-brand">${c.brand}</div>
        <div class="car-card-name">${c.model}</div>
        <div class="car-card-price">₹${minL}${maxL}</div>
        ${showLaunch&&c.launchDate?`<div class="car-tag" style="color:#b45309;background:#fef3c7">${c.launchDate}</div>`:''}
        <div class="car-card-tags">
          <span class="car-tag ${fcls}">${c.fuelType}</span>
          ${c.transmission?`<span class="car-tag">${c.transmission}</span>`:''}
          ${c.bodyType?`<span class="car-tag">${c.bodyType}</span>`:''}
        </div>
        <div class="car-card-stars"><span class="stars">${stars}</span><span class="stars-count">${c.rating||4.0} (${c.reviewCount||0})</span></div>
      </div>
      <div class="car-card-footer"><button class="btn-price" onclick="event.stopPropagation();openCarModal('${slug}')">View Price Breakup</button></div>
    </div>`;
  }).join('');
}

function renderUsedCarCards(cars,el){
  if(!cars.length){el.innerHTML='<div class="loading-row">No used cars found.</div>';return;}
  el.innerHTML=cars.map(c=>`<div class="car-card" onclick="openUsedCarModal('${c._id}')">
    <div class="car-card-img" style="overflow:hidden;position:relative">
      ${c.isCertified?`<div class="car-card-badge certified">Certified</div>`:''}
      ${getCarImgTag(c)}
    </div>
    <div class="car-card-body">
      <div class="car-card-brand">${c.brand}</div>
      <div class="car-card-name">${c.year} ${c.model}</div>
      <div class="car-card-price">₹${(c.price/1e5).toFixed(2)} Lakh</div>
      <div class="used-meta">
        <span class="used-meta-item">📍 ${c.city}</span>
        <span class="used-meta-item">🛣️ ${(c.km/1000).toFixed(1)}k km</span>
        <span class="used-meta-item">${c.owner}</span>
      </div>
      <div class="car-card-tags"><span class="car-tag">${c.fuelType}</span>${c.transmission?`<span class="car-tag">${c.transmission}</span>`:''}</div>
    </div>
    <div class="car-card-footer"><button class="btn-price" onclick="event.stopPropagation();openUsedCarModal('${c._id}')">View Details</button></div>
  </div>`).join('');
}

function renderNewsCards(news,el){
  if(!news.length){el.innerHTML='<div class="loading-row">No articles found.</div>';return;}
  const icons={News:'📰',Review:'⭐',Video:'▶️',Launch:'🚀'};
  el.innerHTML=news.map(n=>{
    const date=new Date(n.publishedAt||n.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
    return `<div class="news-card"><div class="news-card-img">${icons[n.category]||'📰'}</div><div class="news-card-body"><div class="news-card-cat">${n.category}</div><div class="news-card-title">${n.title}</div>${n.excerpt?`<div class="news-card-excerpt">${n.excerpt}</div>`:''}<div class="news-card-meta"><span class="news-author">By ${n.author}</span><span class="news-date">${date}</span></div></div></div>`;
  }).join('');
}

/* ── MODALS ── */
function openCarModal(slugOrId){
  const car=allCars.find(c=>c.slug===slugOrId||c._id===slugOrId); if(!car) return;
  const slug=car.slug||car._id,wished=getWishlist().includes(slug);
  const minL=(car.priceMin/1e5).toFixed(2),maxL=car.priceMax?`– ₹${(car.priceMax/1e5).toFixed(2)} Lakh`:'Lakh onwards';
  const stars='★'.repeat(Math.round(car.rating||4))+'☆'.repeat(5-Math.round(car.rating||4));
  const url=car.image||CAR_IMAGES[car.slug]||'';
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-car-img">${url?`<img src="${url}" alt="${car.model}" style="width:100%;height:100%;object-fit:cover;border-radius:12px 12px 0 0" onerror="this.style.display='none'">`:`<span style="font-size:5rem">${carEmoji(car.fuelType)}</span>`}</div>
    <div class="modal-brand">${car.brand}</div>
    <div class="modal-name">${car.model}</div>
    <div class="modal-price">₹${minL} ${maxL} <span>(Ex-Showroom)</span></div>
    <div style="color:#f59e0b;margin-bottom:.5rem">${stars} <span style="color:#9aa5b4;font-size:.85rem">${car.rating||4.0} (${car.reviewCount||0} reviews)</span></div>
    ${car.description?`<div class="modal-desc">${car.description}</div>`:''}
    <div class="modal-specs">
      <div class="spec-item"><div class="spec-label">Body Type</div><div class="spec-value">${car.bodyType||'—'}</div></div>
      <div class="spec-item"><div class="spec-label">Fuel</div><div class="spec-value">${car.fuelType||'—'}</div></div>
      <div class="spec-item"><div class="spec-label">Transmission</div><div class="spec-value">${car.transmission||'—'}</div></div>
      <div class="spec-item"><div class="spec-label">Seating</div><div class="spec-value">${car.seatingCapacity?car.seatingCapacity+' Seater':'—'}</div></div>
    </div>
    <div class="modal-cta">
      <button class="modal-btn-primary" onclick="showToast('✅ Enquiry sent!','success');closeModal()">Get Best Price</button>
      <button class="modal-btn-secondary" onclick="toggleWishlist('${slug}',null);this.textContent=getWishlist().includes('${slug}')?'❤️ Saved':'🤍 Save'">${wished?'❤️ Saved':'🤍 Save'}</button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function openUsedCarModal(id){
  const car=allUsedCars.find(c=>c._id===id); if(!car) return;
  const url=CAR_IMAGES[car.slug]||'';
  document.getElementById('modalContent').innerHTML=`
    <div class="modal-car-img">${url?`<img src="${url}" alt="${car.model}" style="width:100%;height:100%;object-fit:cover;border-radius:12px 12px 0 0" onerror="this.style.display='none'">`:`<span style="font-size:4rem">${carEmoji(car.fuelType)}</span>`}</div>
    ${car.isCertified?'<div style="background:#d1fae5;color:#065f46;padding:.4rem 1rem;border-radius:30px;display:inline-block;font-weight:800;font-size:.8rem;margin-bottom:.75rem">✅ Certified</div>':''}
    <div class="modal-brand">${car.brand}</div>
    <div class="modal-name">${car.year} ${car.model}</div>
    <div class="modal-price">₹${(car.price/1e5).toFixed(2)} Lakh</div>
    <div class="modal-specs">
      <div class="spec-item"><div class="spec-label">City</div><div class="spec-value">${car.city}</div></div>
      <div class="spec-item"><div class="spec-label">KM Driven</div><div class="spec-value">${car.km.toLocaleString()} km</div></div>
      <div class="spec-item"><div class="spec-label">Fuel</div><div class="spec-value">${car.fuelType}</div></div>
      <div class="spec-item"><div class="spec-label">Transmission</div><div class="spec-value">${car.transmission||'—'}</div></div>
      <div class="spec-item"><div class="spec-label">Owner</div><div class="spec-value">${car.owner}</div></div>
      <div class="spec-item"><div class="spec-label">Year</div><div class="spec-value">${car.year}</div></div>
    </div>
    <div class="modal-cta">
      <button class="modal-btn-primary" onclick="showToast('📞 Seller contact shared!','success');closeModal()">Contact Seller</button>
      <button class="modal-btn-secondary" onclick="showToast('🧪 Inspection booked!','success');closeModal()">Book Inspection</button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){ document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow=''; }

/* ── SELL ── */
function populateSellForm(){ const s=document.getElementById('sellYear'); if(s){const y=new Date().getFullYear();for(let i=y;i>=2000;i--) s.innerHTML+=`<option value="${i}">${i}</option>`;} }
async function submitUsedCar(e){
  e.preventDefault();
  const brand=document.getElementById('sellBrand').value,model=document.getElementById('sellModel').value;
  const body={name:`${brand} ${model} ${document.getElementById('sellYear').value}`,brand,model,year:+document.getElementById('sellYear').value,km:+document.getElementById('sellKm').value,fuelType:document.getElementById('sellFuel').value,transmission:document.getElementById('sellTransmission').value,city:document.getElementById('sellCity').value,price:+document.getElementById('sellPrice').value,owner:document.getElementById('sellOwner').value,description:document.getElementById('sellDesc').value};
  const hdrs={'Content-Type':'application/json'}; const token=getToken(); if(token) hdrs['Authorization']='Bearer '+token;
  try{
    const res=await fetch('/api/used-cars',{method:'POST',headers:hdrs,body:JSON.stringify(body)});
    const data=await res.json();
    if(data.success){allUsedCars.unshift(data.data);renderUsedCarsGrid();const s=document.getElementById('sellSuccess');s.innerHTML=`🎉 Your ${brand} ${model} is listed! We will contact you within 24 hours.`;s.style.display='block';e.target.reset();showToast('✅ Car listed!','success');}
    else showToast('❌ '+data.message,'error');
  }catch{showToast('⚠️ Server not running.','error');}
}

/* ── TOAST ── */
function showToast(msg,type=''){const t=document.getElementById('toast');t.textContent=msg;t.className=`toast ${type} show`;setTimeout(()=>t.classList.remove('show'),3500);}

/* ── FALLBACK DATA ── */
function getFallbackCars(){return[
  {slug:'maruti-swift',brand:'Maruti Suzuki',model:'Swift',priceMin:579000,priceMax:880000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Manual',seatingCapacity:5,isTrending:true,rating:4.2,reviewCount:1240,description:"India's most loved hatchback."},
  {slug:'maruti-baleno',brand:'Maruti Suzuki',model:'Baleno',priceMin:599000,priceMax:910000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.1,reviewCount:980},
  {slug:'maruti-dzire',brand:'Maruti Suzuki',model:'Dzire',priceMin:626000,priceMax:931000,bodyType:'Sedan',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.3,reviewCount:2100},
  {slug:'maruti-fronx',brand:'Maruti Suzuki',model:'Fronx',priceMin:685000,priceMax:1198000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.0,reviewCount:560},
  {slug:'maruti-brezza',brand:'Maruti Suzuki',model:'Brezza',priceMin:826000,priceMax:1301000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.2,reviewCount:870},
  {slug:'maruti-wagon-r',brand:'Maruti Suzuki',model:'Wagon R',priceMin:499000,priceMax:695000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Manual',seatingCapacity:5,rating:4.0,reviewCount:1500},
  {slug:'maruti-ertiga',brand:'Maruti Suzuki',model:'Ertiga',priceMin:880000,priceMax:1294000,bodyType:'MPV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:7,rating:4.2,reviewCount:760},
  {slug:'maruti-grand-vitara',brand:'Maruti Suzuki',model:'Grand Vitara',priceMin:1077000,priceMax:1972000,bodyType:'SUV',fuelType:'Hybrid',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:430},
  {slug:'tata-punch',brand:'Tata',model:'Punch',priceMin:560000,priceMax:1055000,bodyType:'SUV',fuelType:'Petrol',transmission:'Manual',seatingCapacity:5,rating:4.1,reviewCount:1100},
  {slug:'tata-nexon',brand:'Tata',model:'Nexon',priceMin:732000,priceMax:1415000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.4,reviewCount:2300,description:"India's #1 SUV with 5-star safety."},
  {slug:'tata-tiago',brand:'Tata',model:'Tiago',priceMin:457000,priceMax:782000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Manual',seatingCapacity:5,rating:4.0,reviewCount:870},
  {slug:'tata-harrier',brand:'Tata',model:'Harrier',priceMin:1289000,priceMax:2525000,bodyType:'SUV',fuelType:'Diesel',transmission:'Automatic',seatingCapacity:5,rating:4.4,reviewCount:980},
  {slug:'tata-safari',brand:'Tata',model:'Safari',priceMin:1329000,priceMax:2596000,bodyType:'SUV',fuelType:'Diesel',transmission:'Automatic',seatingCapacity:7,rating:4.3,reviewCount:640},
  {slug:'tata-punch-ev',brand:'Tata',model:'Punch EV',priceMin:809000,priceMax:1259000,bodyType:'SUV',fuelType:'Electric',transmission:'Automatic',seatingCapacity:5,rating:4.2,reviewCount:430},
  {slug:'tata-harrier-ev',brand:'Tata',model:'Harrier EV',priceMin:2149000,priceMax:3023000,bodyType:'SUV',fuelType:'Electric',transmission:'Automatic',seatingCapacity:5,rating:4.6,reviewCount:120},
  {slug:'hyundai-creta',brand:'Hyundai',model:'Creta',priceMin:1079000,priceMax:2020000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.5,reviewCount:3200},
  {slug:'hyundai-venue',brand:'Hyundai',model:'Venue',priceMin:800000,priceMax:1569000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.2,reviewCount:1800},
  {slug:'hyundai-verna',brand:'Hyundai',model:'Verna',priceMin:1098000,priceMax:1840000,bodyType:'Sedan',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.4,reviewCount:1200},
  {slug:'hyundai-i20',brand:'Hyundai',model:'i20',priceMin:599000,priceMax:1057000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.3,reviewCount:1600},
  {slug:'kia-seltos',brand:'Kia',model:'Seltos',priceMin:1099000,priceMax:2019000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.5,reviewCount:2100},
  {slug:'kia-sonet',brand:'Kia',model:'Sonet',priceMin:730000,priceMax:1409000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:1400},
  {slug:'mahindra-scorpio-n',brand:'Mahindra',model:'Scorpio N',priceMin:1349000,priceMax:2434000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:7,rating:4.5,reviewCount:1800},
  {slug:'mahindra-thar',brand:'Mahindra',model:'Thar',priceMin:999000,priceMax:1719000,bodyType:'SUV',fuelType:'Diesel',transmission:'Manual',seatingCapacity:4,rating:4.6,reviewCount:2200},
  {slug:'mahindra-thar-roxx',brand:'Mahindra',model:'Thar Roxx',priceMin:1239000,priceMax:2225000,bodyType:'SUV',fuelType:'Diesel',transmission:'Automatic',seatingCapacity:5,rating:4.7,reviewCount:340},
  {slug:'mahindra-xuv-3xo',brand:'Mahindra',model:'XUV 3XO',priceMin:737000,priceMax:1455000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:760},
  {slug:'mahindra-be-6',brand:'Mahindra',model:'BE 6',priceMin:1890000,priceMax:2849000,bodyType:'SUV',fuelType:'Electric',transmission:'Automatic',seatingCapacity:5,rating:4.6,reviewCount:180},
  {slug:'toyota-innova-hycross',brand:'Toyota',model:'Innova Hycross',priceMin:1915000,priceMax:3238000,bodyType:'MPV',fuelType:'Hybrid',transmission:'Automatic',seatingCapacity:8,rating:4.6,reviewCount:870},
  {slug:'toyota-glanza',brand:'Toyota',model:'Glanza',priceMin:646000,priceMax:944000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.2,reviewCount:430},
  {slug:'toyota-hyryder',brand:'Toyota',model:'Urban Cruiser Hyryder',priceMin:1099000,priceMax:2019000,bodyType:'SUV',fuelType:'Hybrid',transmission:'Automatic',seatingCapacity:5,rating:4.4,reviewCount:560},
  {slug:'skoda-kylaq',brand:'Skoda',model:'Kylaq',priceMin:759000,priceMax:1299000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.5,reviewCount:280},
  {slug:'skoda-slavia',brand:'Skoda',model:'Slavia',priceMin:1000000,priceMax:1799000,bodyType:'Sedan',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.4,reviewCount:540},
  {slug:'volkswagen-taigun',brand:'Volkswagen',model:'Taigun',priceMin:1142000,priceMax:1919000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.4,reviewCount:780},
  {slug:'volkswagen-virtus',brand:'Volkswagen',model:'Virtus',priceMin:1050000,priceMax:1900000,bodyType:'Sedan',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:620},
  {slug:'honda-amaze',brand:'Honda',model:'Amaze',priceMin:752000,priceMax:1000000,bodyType:'Sedan',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.1,reviewCount:760},
  {slug:'honda-elevate',brand:'Honda',model:'Elevate',priceMin:1164000,priceMax:1990000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:430},
  {slug:'renault-kwid',brand:'Renault',model:'Kwid',priceMin:430000,priceMax:599000,bodyType:'Hatchback',fuelType:'Petrol',transmission:'Manual',seatingCapacity:5,rating:3.9,reviewCount:980},
  {slug:'renault-triber',brand:'Renault',model:'Triber',priceMin:576000,priceMax:860000,bodyType:'MPV',fuelType:'Petrol',transmission:'Manual',seatingCapacity:7,isTrending:true,rating:4.0,reviewCount:560},
  {slug:'renault-duster',brand:'Renault',model:'Duster',priceMin:950000,priceMax:1900000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,isTrending:true,rating:4.3,reviewCount:90,category:'new'},
  {slug:'mg-windsor-ev',brand:'MG',model:'Windsor EV',priceMin:1198000,priceMax:1595000,bodyType:'SUV',fuelType:'Electric',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:320},
  {slug:'jeep-compass',brand:'Jeep',model:'Compass',priceMin:1799000,priceMax:3200000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',seatingCapacity:5,rating:4.3,reviewCount:540},
  {slug:'nissan-tekton',brand:'Nissan',model:'Tekton',priceMin:1100000,priceMax:1800000,bodyType:'SUV',fuelType:'Petrol',transmission:'Automatic',isUpcoming:true,category:'upcoming',launchDate:'Mar 2026',rating:4.0,reviewCount:0},
];}
function getFallbackUsedCars(){return[
  {_id:'u1',brand:'Toyota',model:'Fortuner',year:2020,price:2800000,km:45000,fuelType:'Diesel',transmission:'Automatic',city:'Delhi',owner:'1st Owner',isCertified:true},
  {_id:'u2',brand:'Hyundai',model:'Verna',year:2021,price:780000,km:32000,fuelType:'Petrol',transmission:'Automatic',city:'Mumbai',owner:'1st Owner',isCertified:true},
  {_id:'u3',brand:'Maruti Suzuki',model:'Swift DZire',year:2019,price:520000,km:55000,fuelType:'Petrol',transmission:'Manual',city:'Bangalore',owner:'2nd Owner'},
  {_id:'u4',brand:'Mahindra',model:'Thar',year:2022,price:1450000,km:18000,fuelType:'Diesel',transmission:'Manual',city:'Pune',owner:'1st Owner',isCertified:true},
  {_id:'u5',brand:'Tata',model:'Nexon',year:2021,price:920000,km:28000,fuelType:'Petrol',transmission:'Automatic',city:'Delhi',owner:'1st Owner',isCertified:true},
  {_id:'u6',brand:'Hyundai',model:'Creta',year:2020,price:1150000,km:42000,fuelType:'Petrol',transmission:'Automatic',city:'Mumbai',owner:'1st Owner'},
  {_id:'u7',brand:'Kia',model:'Seltos',year:2021,price:1280000,km:35000,fuelType:'Diesel',transmission:'Automatic',city:'Gurgaon',owner:'1st Owner',isCertified:true},
  {_id:'u8',brand:'Honda',model:'City',year:2019,price:780000,km:58000,fuelType:'Petrol',transmission:'Automatic',city:'Kolkata',owner:'2nd Owner'},
];}
function getFallbackBrands(){return[
  {name:'Maruti Suzuki',slug:'maruti-suzuki',carCount:18},{name:'Tata',slug:'tata',carCount:15},
  {name:'Mahindra',slug:'mahindra',carCount:12},{name:'Hyundai',slug:'hyundai',carCount:14},
  {name:'Toyota',slug:'toyota',carCount:10},{name:'Kia',slug:'kia',carCount:8},
  {name:'Skoda',slug:'skoda',carCount:6},{name:'BMW',slug:'bmw',carCount:20},
  {name:'Renault',slug:'renault',carCount:7},{name:'Nissan',slug:'nissan',carCount:5},
  {name:'Mercedes-Benz',slug:'mercedes-benz',carCount:25},{name:'MG',slug:'mg',carCount:7},
];}
function getFallbackNews(){return[
  {_id:'n1',title:'Chery Lepas L6 Patented in India',excerpt:'Lepas is a new sub-brand targeting young audiences.',author:'Dwij Bhandut',category:'News',publishedAt:'2026-03-14'},
  {_id:'n2',title:'Why Automatics Are Becoming Standard in Lower Variants',excerpt:"India's car market has seen a clear shift toward automatic transmissions.",author:'Sagar Bhanushali',category:'News',publishedAt:'2026-03-14'},
  {_id:'n3',title:'Ferrari 849 Testarossa Debuts in India at Rs. 10.37 Crore',excerpt:'Ferrari unveiled the 849 Testarossa in India priced at Rs. 10.37 crore.',author:'Haji Chakralwale',category:'News',publishedAt:'2026-03-14'},
  {_id:'n4',title:'Kia Carens Clavis Long-Term Review: City Report',excerpt:'After a month with the Clavis, it has become a reliable daily driver.',author:'Santosh Nair',category:'Review',publishedAt:'2026-03-13'},
  {_id:'n5',title:'BMW M2 CS First Look Review',excerpt:'We take a look at the new BMW M2 CS, aimed at driving purists.',author:'Santosh Nair',category:'Review',publishedAt:'2026-03-13'},
  {_id:'n6',title:'Tata Punch EV Facelift First Drive Review',excerpt:'Strategic upgrades make the Punch EV a stronger value proposition.',author:'Desirazu Venkat',category:'Review',publishedAt:'2026-02-28'},
  {_id:'n7',title:'Maruti Suzuki Dzire Reaches 3 Million Sales',excerpt:'The compact sedan has crossed 3 million cumulative sales since 2008.',author:'Haji Chakralwale',category:'News',publishedAt:'2026-03-13'},
  {_id:'n8',title:"Vinfast Launches Trade Gas for Electric Program",excerpt:'Discounts on EVs across India, Indonesia, Philippines and Vietnam.',author:'Dwij Bhandut',category:'Launch',publishedAt:'2026-03-14'},
];}
