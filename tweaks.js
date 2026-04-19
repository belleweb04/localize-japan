// Tweaks panel — density (edit mode).
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "cozy"
}/*EDITMODE-END*/;

let state = {...TWEAK_DEFAULTS};

function applyState(){
  const pad = state.density === 'roomy' ? '92px 28px' : '72px 28px';
  document.querySelectorAll('.vB .sec').forEach(s => { s.style.padding = pad; });
}

function setKey(k,v){
  state[k]=v;
  applyState();
  try { window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]:v}}, '*'); } catch(e){}
}

window.addEventListener('message', (e) => {
  const m = e.data;
  if(!m || typeof m !== 'object') return;
  if(m.type === '__activate_edit_mode') document.getElementById('tweaks').classList.add('show');
  if(m.type === '__deactivate_edit_mode') document.getElementById('tweaks').classList.remove('show');
});
try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}

document.querySelectorAll('#density button').forEach(b=>{
  if(b.dataset.d === state.density) b.classList.add('on'); else b.classList.remove('on');
  b.onclick = ()=>{ document.querySelectorAll('#density button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); setKey('density', b.dataset.d); };
});

applyState();

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
}, {threshold:.1});
document.querySelectorAll('.frame section, .frame .hero, .frame .final2').forEach(n => {
  n.classList.add('reveal');
  io.observe(n);
});
