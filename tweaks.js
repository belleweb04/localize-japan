// Tweaks panel — toggle variants, change Variant A accent, density.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showA": false,
  "showB": true,
  "showC": false,
  "accentA": "#22C1E3",
  "density": "cozy"
}/*EDITMODE-END*/;

let state = {...TWEAK_DEFAULTS};

function applyState(){
  document.querySelectorAll('.frame-wrap').forEach(fw=>{
    const v = fw.dataset.variant;
    fw.style.display = state['show'+v] ? '' : 'none';
  });
  document.documentElement.style.setProperty('--a-accent', state.accentA);
  const vA = document.querySelector('.frame.vA');
  if(vA){
    vA.style.setProperty('--accent', state.accentA);
    // re-tint cta/solve gradient via CSS vars — simple approach: toggle classes
  }
  // density
  const pad = state.density === 'roomy' ? '72px 24px' : '56px 24px';
  document.querySelectorAll('.vA .sec').forEach(s => s.style.padding = pad);
  document.querySelectorAll('.vB .sec').forEach(s => s.style.padding = (state.density==='roomy'?'92px 28px':'72px 28px'));
  document.querySelectorAll('.vC .sec').forEach(s => s.style.padding = (state.density==='roomy'?'84px 28px':'64px 28px'));
}

function setKey(k,v){
  state[k]=v;
  applyState();
  try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]:v}}, '*'); } catch(e){}
}

// Listener FIRST, then announce
window.addEventListener('message', (e) => {
  const m = e.data;
  if(!m || typeof m !== 'object') return;
  if(m.type === '__activate_edit_mode') document.getElementById('tweaks').classList.add('show');
  if(m.type === '__deactivate_edit_mode') document.getElementById('tweaks').classList.remove('show');
});
try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}

// wire up
document.querySelectorAll('#variantToggles button').forEach(b=>{
  const v = b.dataset.v;
  if(!state['show'+v]) b.classList.remove('on');
  b.onclick = ()=>{ b.classList.toggle('on'); setKey('show'+v, b.classList.contains('on')); };
});
document.querySelectorAll('#accentA button').forEach(b=>{
  if(b.dataset.c === state.accentA) b.classList.add('on'); else b.classList.remove('on');
  b.onclick = ()=>{ document.querySelectorAll('#accentA button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); setKey('accentA', b.dataset.c); };
});
document.querySelectorAll('#density button').forEach(b=>{
  if(b.dataset.d === state.density) b.classList.add('on'); else b.classList.remove('on');
  b.onclick = ()=>{ document.querySelectorAll('#density button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); setKey('density', b.dataset.d); };
});

applyState();

// Scroll reveal inside each frame (optional polish)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
}, {threshold:.1});
document.querySelectorAll('.frame section, .frame .hero, .frame .final, .frame .final2, .frame .final-c').forEach(n => {
  n.classList.add('reveal');
  io.observe(n);
});
