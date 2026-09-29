/* Ecosystem Rescue loader bundle. Loaded by a small HTML file; builds the full resource. */
(function(){
var BASE=(document.currentScript&&document.currentScript.src||'').replace(/[^\/]*$/,'');
window.__ER_BASE__=BASE;
var l=document.createElement('link');l.rel='stylesheet';l.href="https://fonts.googleapis.com/css2?family=Freckle+Face&family=Jost:wght@700&family=Nunito:wght@700;800;900&family=Figtree:wght@700;800&display=swap";document.head.appendChild(l);
var st=document.createElement('style');st.textContent="\n:root{\n  color-scheme: light;\n  --frame:#1d2915; --ink:#22220c; --red:#7a0000; --alert:#c21f1f;\n  --green:#325221; --green-2:#315220; --deep:#1f3515; --gold:#f2c230; --gold-ink:#8a6a00;\n  --cream:#fbf6ea; --paper:#f3ead6; --paper-edge:#e2d4b4; --card:#fffdf6; --muted:#5d5a4e;\n  --up:#3f7a2e; --down:#8b0d0d; --same:#555;\n  --f-display:\"Freckle Face\",\"Comic Sans MS\",cursive;\n  --f-futura:\"Jost\",\"Futura\",\"Century Gothic\",sans-serif;\n  --f-vag:\"Nunito\",\"VAG Rounded\",\"Arial Rounded MT Bold\",sans-serif;\n  --f-canva:\"Figtree\",\"Helvetica Neue\",Arial,sans-serif;\n}\n[hidden]{display:none!important;}\nhtml,body{height:100%;}\nbody{margin:0;background:var(--frame);overflow:hidden;font-family:var(--f-vag);color:var(--ink);-webkit-tap-highlight-color:transparent;}\n#viewport{position:fixed;inset:0;overflow:hidden;}\n#stage{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;overflow:hidden;background:#cfd8c0;box-shadow:0 0 60px rgba(0,0,0,.45);touch-action:none;user-select:none;-webkit-user-select:none;}\n.slide{position:absolute;inset:0;background-size:1920px 1080px;visibility:hidden;opacity:0;transition:opacity .4s ease, visibility 0s linear .4s;}\n.slide.on{visibility:visible;opacity:1;transition:opacity .4s ease;}\n.abs{position:absolute;box-sizing:border-box;}\n.tb{position:absolute;box-sizing:border-box;overflow:visible;line-height:1.4;}\n.tb p{margin:0;}\n.title{font-family:var(--f-display);line-height:1;text-align:center;font-weight:400;}\n.c{text-align:center;}\n.red{color:var(--red);} .alert{color:var(--alert);} .blk{color:#000;}\n.u{text-decoration:underline;text-decoration-thickness:.08em;text-underline-offset:.12em;}\n.slide.on .pop{animation:pop .6s cubic-bezier(.2,1.4,.4,1) both;}\n.slide.on .pop.d1{animation-delay:.12s}.slide.on .pop.d2{animation-delay:.24s}\n@keyframes pop{from{opacity:0;transform:translateY(-18px) scale(.96) rotate(var(--r,0deg));}to{opacity:1;transform:rotate(var(--r,0deg));}}\n\n/* buttons */\nbutton{font:inherit;color:inherit;}\n.hot{position:absolute;border:0;padding:0;margin:0;background:transparent;cursor:pointer;border-radius:16px;}\n.hot:focus-visible,.btn:focus-visible,.kit:focus-visible,.opt:focus-visible,.card:focus-visible,.tile:focus-visible,.tab:focus-visible{outline:5px solid var(--gold);outline-offset:3px;}\n.btn{position:relative;font-family:var(--f-futura);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:var(--green);border:0;border-radius:18px;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 4px 0 rgba(0,0,0,.25);cursor:pointer;text-align:center;line-height:1.1;box-sizing:border-box;transition:transform .15s, background .2s, box-shadow .2s;}\n.btn.abs{position:absolute;}\n.btn:hover{transform:translateY(-2px);}\n.btn:active{transform:translateY(1px);box-shadow:0 2px 0 rgba(0,0,0,.25);}\n.btn svg{flex-shrink:0;}\n.btn.alt{background:var(--card);color:var(--green);box-shadow:inset 0 0 0 4px var(--green),0 4px 0 rgba(0,0,0,.15);}\n.btn.gold{background:var(--gold);color:var(--ink);}\n.btn.done{background:#e9f0dd;color:var(--green);box-shadow:inset 0 0 0 3px var(--green);}\n.btn[disabled]{background:#b8b4a5;color:#f6f3ea;box-shadow:none;cursor:not-allowed;transform:none;}\n.btn.pulse{animation:ring 1.4s ease-in-out infinite;}\n@keyframes ring{0%,100%{box-shadow:0 0 0 4px #fff,0 0 0 8px rgba(242,194,48,.6)}50%{box-shadow:0 0 0 4px #fff,0 0 0 13px rgba(242,194,48,1)}}\n.next{border-radius:20px;transition:transform .15s;}\n.next:hover{transform:scale(1.04);}\n.lock{position:absolute;border-radius:20px;background:rgba(240,236,224,.78);display:grid;place-items:center;cursor:pointer;border:0;padding:0;}\n.lock[hidden]{display:none!important;}\n.locknote{position:absolute;padding:6px 10px;border-radius:10px;background:rgba(29,41,21,.88);color:#fff;font:800 16px/1.3 var(--f-vag);text-align:center;pointer-events:none;}\n.kit{position:absolute;left:16px;top:16px;width:88px;height:88px;border-radius:50%;background:var(--green);border:5px solid var(--card);box-shadow:0 6px 14px rgba(0,0,0,.35);display:grid;place-items:center;cursor:pointer;z-index:60;padding:0;}\n.kit:hover{transform:scale(1.05);}\n\n/* text inputs */\n.field{position:absolute;box-sizing:border-box;border:0;outline:none;resize:none;background:transparent;font-family:var(--f-vag);font-weight:800;color:var(--ink);padding:0;margin:0;user-select:text;-webkit-user-select:text;touch-action:auto;}\n.field::placeholder{color:rgba(34,34,12,.4);}\n.field:focus{box-shadow:0 0 0 4px rgba(242,194,48,.85);border-radius:10px;}\n.wc{position:absolute;font:900 16px/1 var(--f-vag);white-space:nowrap;}\n.wc.ok{color:var(--green);} .wc.no{color:var(--red);}\n.need{animation:needglow 1.2s ease-in-out 3;}\n@keyframes needglow{50%{box-shadow:0 0 0 6px rgba(242,194,48,1);border-radius:10px;}}\n\n/* toast */\n#toast{position:absolute;left:50%;top:22px;transform:translate(-50%,-170%);background:var(--cream);color:var(--ink);border:5px solid var(--green);border-radius:26px;padding:14px 30px;font:900 27px/1.3 var(--f-vag);max-width:1150px;text-align:center;box-shadow:0 12px 30px rgba(0,0,0,.3);transition:transform .35s cubic-bezier(.3,1.3,.5,1);z-index:300;pointer-events:none;}\n#toast.show{transform:translate(-50%,0);}\n#toast.warn{border-color:var(--down);}\n\n/* map, report, teacher */\n.veil{position:absolute;inset:0;background:rgba(29,41,21,.45);}\n.paper{position:absolute;box-sizing:border-box;background:var(--paper);border-radius:34px;border:6px solid var(--paper-edge);box-shadow:0 24px 60px rgba(0,0,0,.4);}\n.mcard{background:var(--card);border-radius:24px;padding:18px;box-shadow:0 8px 18px rgba(0,0,0,.18);display:flex;flex-direction:column;gap:12px;position:relative;}\n.mcard.here{box-shadow:0 0 0 7px var(--gold),0 8px 18px rgba(0,0,0,.18);}\n.mcard.locked{background:#ebe4d3;}\n.mcard.locked img{filter:grayscale(1) opacity(.5);}\n.mcard .thumb{height:170px;border-radius:14px;overflow:hidden;}\n.mcard .thumb img{width:100%;height:230px;object-fit:cover;object-position:top;}\n.mcard .k{font-size:20px;font-weight:900;color:var(--green);letter-spacing:.06em;}\n.mcard .n{font-family:var(--f-display);font-size:38px;color:var(--red);line-height:1;}\n.mcard.locked .n,.mcard.locked .k{color:var(--muted);}\n.mcard .st{display:flex;align-items:center;gap:10px;font-size:22px;font-weight:900;}\n.herechip{position:absolute;top:-26px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--ink);font-size:20px;font-weight:900;padding:8px 18px;border-radius:999px;white-space:nowrap;}\n\n/* mission 1 */\n.slot{position:absolute;box-sizing:border-box;border-radius:16px;border:4px dashed #b9ab8c;background:rgba(255,253,246,.55);transition:background .15s, border-color .15s, box-shadow .2s;}\n.slot.hover{background:rgba(242,194,48,.3);border-color:var(--gold);border-style:solid;}\n.slot.target{border-color:var(--gold);animation:breathe 1.2s ease-in-out infinite;}\n@keyframes breathe{50%{background:rgba(242,194,48,.2)}}\n.slot.wrong{border:5px solid var(--down);background:rgba(139,13,13,.1);}\n.slot.assist{border:5px solid var(--gold);border-style:solid;}\n.slot.right{border:5px solid var(--up);border-style:solid;background:rgba(63,122,46,.12);}\n.ph{position:absolute;border-radius:14px;background:#e9dbc0;box-shadow:inset 0 0 0 3px rgba(120,100,70,.35);background-image:repeating-linear-gradient(45deg,rgba(120,100,70,.06) 0 10px,transparent 10px 20px);}\n.tile{position:absolute;width:219px;height:224px;border-radius:14px;background-size:100% 100%;cursor:grab;transition:left .28s cubic-bezier(.3,1.3,.5,1),top .28s cubic-bezier(.3,1.3,.5,1),width .28s,height .28s,box-shadow .2s;touch-action:none;container-type:size;z-index:20;}\n.tile.dragging{transition:none;cursor:grabbing;box-shadow:0 18px 40px rgba(0,0,0,.35);z-index:50;}\n.tile.sel{box-shadow:0 0 0 6px var(--gold),0 10px 24px rgba(0,0,0,.25);z-index:40;}\n.tile.fixed{cursor:default;}\n.tile .relabel{position:absolute;left:5%;right:5%;top:65%;height:31%;background:#f8efdc;border-radius:6px;display:grid;place-items:center;text-align:center;font:800 9cqw/1.05 var(--f-canva);color:#1b1b12;}\n.role{position:absolute;width:190px;text-align:center;font:900 17px/1.1 var(--f-vag);color:var(--green);opacity:0;transition:opacity .4s;}\n.role.show{opacity:1;}\n#arrows path.flow{stroke-dasharray:14 12;animation:flow 1s linear infinite;}\n@keyframes flow{to{stroke-dashoffset:-26}}\n.fb{position:absolute;box-sizing:border-box;background:var(--card);border:4px solid var(--down);border-radius:18px;padding:10px 18px;display:flex;gap:14px;align-items:center;box-shadow:0 6px 14px rgba(0,0,0,.18);font:800 21px/1.3 var(--f-vag);z-index:25;}\n.fb.good{border-color:var(--up);}\n.fb.help{border-color:var(--gold);}\n\n/* mission 2 */\n.opt{position:absolute;border-radius:16px;border:0;background:transparent;cursor:pointer;padding:0;transition:box-shadow .15s, background .15s;}\n.opt:hover{box-shadow:inset 0 0 0 3px rgba(34,34,12,.25);}\n.opt.chosen[data-v=\"inc\"]{box-shadow:inset 0 0 0 5px var(--up),0 0 0 3px #fff;background:rgba(63,122,46,.12);}\n.opt.chosen[data-v=\"dec\"]{box-shadow:inset 0 0 0 5px var(--down),0 0 0 3px #fff;background:rgba(139,13,13,.1);}\n.opt.chosen[data-v=\"same\"]{box-shadow:inset 0 0 0 5px var(--same),0 0 0 3px #fff;background:rgba(80,80,80,.1);}\n.opt.faded{background:rgba(255,253,245,.55);}\n.colglow{position:absolute;border-radius:18px;pointer-events:none;box-shadow:0 0 0 6px var(--gold);opacity:0;transition:opacity .2s;}\n.colglow.on{opacity:1;}\n.pop-card{position:absolute;box-sizing:border-box;background:var(--card);border:4px solid var(--gold);border-radius:20px;padding:18px 22px;box-shadow:0 10px 24px rgba(0,0,0,.25);display:flex;flex-direction:column;gap:10px;z-index:30;}\n.pop-card[hidden]{display:none!important;}\n.linkbtn{background:none;border:0;padding:0;font:900 18px/1 var(--f-vag);color:var(--green);text-decoration:underline;cursor:pointer;align-self:flex-start;}\n\n/* mission 3 */\n.card{position:absolute;border-radius:14px;border:0;background:transparent;padding:0;cursor:default;}\n.card.can{cursor:pointer;animation:glow 1.3s ease-in-out infinite;}\n@keyframes glow{0%,100%{box-shadow:0 0 0 4px rgba(242,194,48,.55),0 0 18px 4px rgba(242,194,48,.35)}50%{box-shadow:0 0 0 8px rgba(242,194,48,.95),0 0 30px 10px rgba(242,194,48,.5)}}\n.cover{position:absolute;box-sizing:border-box;border-radius:10px;background:var(--cream);box-shadow:inset 0 0 0 3px rgba(120,100,70,.35);display:flex;align-items:center;justify-content:center;gap:10px;font:900 20px/1 var(--f-vag);color:#6d6450;white-space:nowrap;pointer-events:none;}\n.cover b{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#bdb39c;color:#fff;}\n.badge{position:absolute;box-sizing:border-box;border-radius:10px;background:#fefbf4;display:flex;align-items:center;gap:10px;padding-left:12px;font:800 21px/1 var(--f-canva);pointer-events:none;white-space:nowrap;}\n.badge i{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--down);color:#fff;font-style:normal;font-size:22px;}\n.cmp{position:absolute;box-sizing:border-box;width:232px;border-radius:14px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,.22);font:900 17px/1 var(--f-vag);pointer-events:none;transform:scale(0);transform-origin:top center;transition:transform .35s cubic-bezier(.3,1.5,.5,1);z-index:6;}\n.cmp.show{transform:scale(1);}\n.cmp div{padding:7px 10px;}\n.cmp .you{background:#fff;color:var(--ink);}\n.cmp .model{background:var(--red);color:#fff;}\n.survey{position:absolute;box-sizing:border-box;background:var(--card);border-radius:14px;box-shadow:inset 0 0 0 3px #d8ccb0;display:flex;align-items:center;gap:14px;padding:0 16px;}\n.survey .cells{flex-grow:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px;font:800 17px/1.2 var(--f-vag);}\n.survey b{font-variant-numeric:tabular-nums;}\n.fixlabel{position:absolute;background:#fefbf4;font:800 22px/1 var(--f-canva);color:#1b1b12;display:flex;align-items:center;justify-content:center;pointer-events:none;}\n\n/* final */\n.plan{position:absolute;border-radius:18px;pointer-events:none;transition:box-shadow .2s;}\n.plan.picked{box-shadow:0 0 0 8px var(--gold),0 14px 30px rgba(0,0,0,.3);}\n.plan .tag{position:absolute;left:-20px;top:-20px;padding:8px 18px;border-radius:999px;background:var(--gold);font:900 20px/1 var(--f-vag);}\n.chosen-cover{position:absolute;border-radius:22px;background:var(--deep);color:#fff;font:700 27px/1 var(--f-futura);letter-spacing:.04em;display:flex;align-items:center;justify-content:center;gap:10px;pointer-events:none;}\n.modalwrap{position:absolute;inset:0;background:rgba(20,28,14,.55);display:grid;place-items:center;z-index:150;opacity:0;visibility:hidden;transition:opacity .3s, visibility 0s linear .3s;}\n.modalwrap.show{opacity:1;visibility:visible;transition:opacity .3s;}\n.modal{width:1160px;background:var(--cream);border:8px solid var(--green);border-radius:36px;padding:40px 60px 36px;box-sizing:border-box;box-shadow:0 30px 70px rgba(0,0,0,.45);display:flex;flex-direction:column;gap:18px;}\n.modal.bad{border-color:var(--down);}\n.modal h2{margin:0;font:400 76px/1 var(--f-display);text-align:center;}\n.modal p{margin:0;font:800 29px/1.4 var(--f-vag);}\n.modal .kicker{font:900 20px/1 var(--f-vag);letter-spacing:.08em;text-align:center;color:var(--green);}\n.chain{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center;}\n.chain span{font:900 23px/1 var(--f-vag);padding:12px 18px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 3px rgba(50,82,33,.35);}\n.chain em{font-style:normal;font:900 28px/1 var(--f-vag);color:var(--green);}\n.quote{background:#fff;border-radius:16px;padding:14px 20px;display:flex;flex-direction:column;gap:6px;box-shadow:inset 0 0 0 3px #d8ccb0;}\n.quote .h{font:900 19px/1 var(--f-vag);color:var(--green);}\n.quote .t{font:800 23px/1.35 var(--f-vag);}\n.mrow{display:flex;gap:16px;justify-content:center;margin-top:4px;}\n.confetti{position:absolute;width:16px;height:26px;top:-40px;z-index:160;pointer-events:none;border-radius:3px;}\n\n/* drawer */\n#drawerWrap{position:absolute;inset:0;z-index:200;visibility:hidden;}\n#drawerWrap.show{visibility:visible;}\n#drawerVeil{position:absolute;inset:0;background:rgba(20,28,14,.58);opacity:0;transition:opacity .3s;}\n#drawerWrap.show #drawerVeil{opacity:1;}\n#drawer{position:absolute;right:0;top:0;width:800px;height:1080px;background:var(--paper);box-shadow:-20px 0 50px rgba(0,0,0,.4);padding:32px 40px;box-sizing:border-box;display:flex;flex-direction:column;gap:16px;transform:translateX(100%);transition:transform .35s cubic-bezier(.3,1.1,.5,1);}\n#drawerWrap.show #drawer{transform:none;}\n.tabs{display:flex;gap:8px;border-bottom:4px solid var(--green);}\n.tab{font:900 22px/1 var(--f-vag);padding:14px 20px;border-radius:14px 14px 0 0;background:#e3d8bf;color:var(--muted);border:0;cursor:pointer;}\n.tab.on{background:var(--green);color:#fff;}\n#dBody{flex-grow:1;overflow:auto;display:flex;flex-direction:column;gap:14px;padding-right:4px;user-select:text;-webkit-user-select:text;}\n.dnote{font:800 22px/1.35 var(--f-vag);}\n.dbox{background:var(--card);border-radius:14px;padding:14px 18px;font:800 21px/1.35 var(--f-vag);}\n.prow{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr);gap:10px;font:800 21px/1.3 var(--f-vag);padding:8px 0;border-bottom:2px dashed #e0d5bd;}\n.prow.h{font-weight:900;color:var(--green);font-size:18px;letter-spacing:.04em;}\n.minibox{position:relative;width:720px;height:352px;background:#efe6d6;border-radius:16px;overflow:hidden;flex-shrink:0;}\n.minibox .inner{position:absolute;left:0;top:0;width:1169px;height:571px;transform:scale(.616);transform-origin:0 0;}\n.dfoot{display:flex;gap:12px;flex-wrap:wrap;}\n.confirm{background:#fff3f0;border:3px solid var(--down);border-radius:14px;padding:12px 16px;display:flex;gap:12px;align-items:center;font:800 20px/1.3 var(--f-vag);}\n.confirm[hidden]{display:none!important;}\n\n/* report / teacher */\n.rcard{background:var(--card);border-radius:22px;padding:22px;box-shadow:0 6px 16px rgba(0,0,0,.14);display:flex;flex-direction:column;gap:12px;overflow:hidden;}\n.rcard .h{font-family:var(--f-display);font-size:38px;color:var(--red);line-height:1;}\n.rrow{display:flex;justify-content:space-between;gap:8px;font:800 20px/1.25 var(--f-vag);padding:6px 0;border-bottom:2px dashed #e0d5bd;}\n.rtext{font:800 20px/1.4 var(--f-vag);}\n.tsec{background:var(--card);border-radius:20px;padding:22px 26px;display:flex;flex-direction:column;gap:10px;box-shadow:0 4px 12px rgba(0,0,0,.08);}\n.tsec .h{font:700 25px/1.1 var(--f-futura);letter-spacing:.04em;text-transform:uppercase;color:var(--green);}\n.tsec p{margin:0;font:700 19px/1.4 var(--f-vag);}\n.tph{display:grid;grid-template-columns:140px minmax(0,1fr);gap:10px;font:700 18px/1.35 var(--f-vag);padding:5px 0;border-bottom:2px dashed #e0d5bd;}\n.tph b{color:var(--red);}\n\n#turn{position:fixed;inset:0;display:none;place-items:center;background:var(--frame);color:#f3ecd6;text-align:center;padding:24px;z-index:999;font:900 22px/1.4 var(--f-vag);}\n#turn svg{width:90px;height:90px;display:block;margin:0 auto 16px;}\n@media (orientation:portrait) and (max-width:700px){#turn{display:grid;}}\n@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;}}\n";document.head.appendChild(st);
document.body.style.margin='0';
document.body.insertAdjacentHTML('beforeend',"<div id=\"viewport\">\n<div id=\"stage\">\n\n<!-- ================= TITLE ================= -->\n<section class=\"slide on\" id=\"title\" style=\"background-image:url(__BASE__bg1.jpg)\" aria-label=\"Ecosystem Rescue\">\n  <div class=\"tb title fit pop\" data-fs=\"147\" style=\"left:436px;top:70px;width:1195px;height:293px;\">\n    <p><span class=\"blk\">ECOSYSTEM</span> <span class=\"red\">RESCUE</span></p>\n  </div>\n  <div class=\"tb c fit pop d1\" data-fs=\"29.3\" style=\"left:591px;top:380px;width:804px;height:121px;font-family:var(--f-canva);font-weight:800;color:#000;\">\n    <p>Something is changing in this bushland.</p>\n    <p>Follow the energy, build the food web and track the ripple effects.</p>\n  </div>\n  <div class=\"tb c fit pop d2\" data-fs=\"54\" style=\"left:618px;top:554px;width:750px;height:147px;font-family:var(--f-canva);font-weight:800;color:var(--ink);\">\n    <p>What happens to a food web</p>\n    <p>when one part changes?</p>\n  </div>\n  <button class=\"hot\" id=\"startBtn\" style=\"left:729px;top:826px;width:501px;height:148px;border-radius:40px;\" aria-label=\"Start mission\"></button>\n  <div class=\"tb c fit\" data-fs=\"50\" style=\"left:618px;top:837px;width:612px;height:75px;font-family:var(--f-futura);font-weight:700;color:#fff;line-height:1.5;pointer-events:none;\">\n    <p>START MISSION</p>\n  </div>\n</section>\n\n<!-- ================= MAP ================= -->\n<section class=\"slide\" id=\"map\" style=\"background-image:url(__BASE__bg1.jpg)\" aria-label=\"Mission map\">\n  <div class=\"veil\"></div>\n  <div class=\"paper\" style=\"left:170px;top:60px;width:1580px;height:960px;\"></div>\n  <div class=\"abs title\" style=\"left:170px;top:92px;width:1580px;font-size:104px;\"><span class=\"blk\">MISSION</span> <span class=\"red\">MAP</span></div>\n  <div class=\"abs c\" style=\"left:250px;top:206px;width:1420px;font-size:30px;font-weight:800;\">Some eucalyptus trees have been lost. Choose where to go next. You can come back to any mission you have finished.</div>\n  <svg class=\"abs\" style=\"left:0;top:0;width:1920px;height:1080px;pointer-events:none\" viewBox=\"0 0 1920 1080\" fill=\"none\" aria-hidden=\"true\">\n    <path d=\"M370 560 C 520 470, 640 470, 760 560 S 1000 650, 1150 560 S 1400 470, 1550 560\" stroke=\"#7a6a48\" stroke-width=\"8\" stroke-dasharray=\"4 22\" stroke-linecap=\"round\"></path>\n  </svg>\n  <div class=\"abs\" id=\"mapCards\" style=\"left:250px;top:300px;width:1420px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:40px;\"></div>\n  <div class=\"abs\" style=\"left:250px;top:862px;width:1420px;display:flex;gap:22px;justify-content:center;\">\n    <button class=\"btn alt\" data-drawer=\"web\" style=\"height:72px;padding:0 28px;font-size:24px\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5\" cy=\"12\" r=\"2.5\"/><circle cx=\"19\" cy=\"5\" r=\"2.5\"/><circle cx=\"19\" cy=\"19\" r=\"2.5\"/><path d=\"M7.3 11 16.7 6M7.3 13l9.4 5\"/></svg>My food web</button>\n    <button class=\"btn alt\" data-drawer=\"pred\" style=\"height:72px;padding:0 28px;font-size:24px\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z\"/></svg>My prediction</button>\n    <button class=\"btn alt\" id=\"mapReport\" style=\"height:72px;padding:0 28px;font-size:24px\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 8h6M9 12h6M9 16h4\"/></svg>My mission report</button>\n    <button class=\"btn alt\" data-go=\"teacher\" style=\"height:72px;padding:0 28px;font-size:24px\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7l9-4 9 4-9 4-9-4z\"/><path d=\"M7 9v5c0 1.7 2.2 3 5 3s5-1.3 5-3V9\"/></svg>Teacher notes</button>\n  </div>\n</section>\n\n<!-- ================= MISSION 1 ================= -->\n<section class=\"slide\" id=\"m1\" style=\"background-image:url(__BASE__bg2.jpg)\" aria-label=\"Mission 1: build the food web\">\n  <div class=\"tb title fit pop\" data-fs=\"97\" style=\"left:436px;top:17px;width:1195px;height:183px;\">\n    <p class=\"blk\">MISSION 1</p>\n    <p class=\"red\" style=\"font-size:.904em\">BUILD THE FOOD WEB</p>\n  </div>\n  <div class=\"tb c fit pop d1\" data-fs=\"30\" style=\"left:600px;top:200px;width:880px;height:100px;font-family:var(--f-futura);font-weight:700;color:var(--ink);line-height:1.35;white-space:nowrap;\">\n    <p>Place the organisms in the food web.</p>\n    <p>Use the arrows to work out where energy moves.</p>\n  </div>\n  <div class=\"tb c fit pop d2\" data-fs=\"21\" style=\"left:1572px;top:46px;width:258px;height:236px;font-family:var(--f-canva);font-weight:800;color:#000;line-height:1.3;white-space:nowrap;\">\n    <p class=\"title red\" style=\"font-size:2em;line-height:1.15\">REMEMBER:</p>\n    <p>ARROWS POINT FROM</p><p>THE FOOD TO THE</p><p>LIVING THING</p><p>THAT EATS IT</p>\n  </div>\n  <div class=\"tb c fit\" data-fs=\"46.7\" style=\"left:130px;top:151px;width:290px;height:63px;font-weight:900;color:#fff;\"><p>Organisms</p></div>\n\n  <div class=\"abs\" style=\"left:688px;top:348px;width:1169px;height:571px;background:#efe6d6;border-radius:10px;\"></div>\n  <div class=\"abs\" style=\"left:672px;top:334px;width:380px;height:86px;background:#2e4d21;border-radius:14px 30px 18px 26px;display:grid;place-items:center;font-size:50px;font-weight:900;color:#fff;\">My food web</div>\n  <svg id=\"arrows\" class=\"abs\" style=\"left:0;top:0;width:1920px;height:1080px;pointer-events:none\" viewBox=\"0 0 1920 1080\" fill=\"none\" aria-hidden=\"true\"></svg>\n  <div class=\"abs c\" style=\"left:705px;top:708px;width:140px;font-size:22px;font-weight:900;line-height:1.1;\">Sun<br><span style=\"font-weight:800;font-size:17px\">energy source</span></div>\n  <div id=\"tray\"></div>\n  <div id=\"slots\"></div>\n  <div id=\"roles\"></div>\n  <div id=\"tiles\"></div>\n  <div class=\"fb\" id=\"m1fb\" hidden style=\"left:1070px;top:354px;width:780px;min-height:76px;\"></div>\n\n  <div class=\"abs\" style=\"left:620px;top:948px;width:700px;font-size:23px;font-weight:900;color:#fff;line-height:1.25;\">Find two food chains in your web. What do they show about how energy moves?</div>\n  <textarea class=\"field\" id=\"discover\" style=\"left:620px;top:1012px;width:700px;height:58px;background:rgba(255,255,255,.93);border-radius:12px;padding:8px 110px 8px 14px;font-size:20px;line-height:21px;\" placeholder=\"Type your answer here\u2026\" aria-label=\"Find two food chains in your web. What do they show about how energy moves?\"></textarea>\n  <div class=\"wc\" data-for=\"discover\" data-min=\"6\" style=\"left:1222px;top:1034px;\"></div>\n  <button class=\"btn gold abs\" id=\"checkWeb\" style=\"left:1345px;top:960px;width:272px;height:96px;font-size:28px;\"><svg width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.2 4L19 7\"/></svg>Check my web</button>\n\n  <button class=\"hot next\" data-next=\"m2\" style=\"left:1663px;top:991px;width:235px;height:70px;\" aria-label=\"Next: Mission 2\"></button>\n  <button class=\"lock\" data-lock=\"m1\" style=\"left:1663px;top:991px;width:235px;height:70px;\" aria-label=\"Next is locked\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#22220c\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/></svg></button>\n  <div class=\"locknote\" data-locknote=\"m1\" style=\"left:1644px;top:940px;width:268px;\">Unlocks when your web is correct</div>\n</section>\n\n<!-- ================= MISSION 2 ================= -->\n<section class=\"slide\" id=\"m2\" style=\"background-image:url(__BASE__bg3.jpg)\" aria-label=\"Mission 2: make a prediction\">\n  <div class=\"tb title fit pop\" data-fs=\"97\" style=\"left:412px;top:35px;width:1195px;height:183px;\">\n    <p class=\"blk\">MISSION 2</p>\n    <p class=\"red\" style=\"font-size:.904em\">MAKE A PREDICTION</p>\n  </div>\n  <div class=\"tb c fit pop d1\" data-fs=\"33\" style=\"left:560px;top:246px;width:900px;height:206px;font-family:var(--f-futura);font-weight:700;color:#000;line-height:1.4;\">\n    <p>Some eucalyptus trees have been lost,</p>\n    <p>so there are <span class=\"alert u\">fewer eucalyptus leaves</span>.</p>\n    <p>What might happen to each animal?</p>\n  </div>\n  <div class=\"tb c fit pop d2\" data-fs=\"22\" style=\"left:1612px;top:44px;width:288px;height:206px;font-family:var(--f-canva);font-weight:800;color:#000;line-height:1.3;white-space:nowrap;\">\n    <p class=\"title red\" style=\"font-size:2em;line-height:1.15\">REMEMBER:</p>\n    <p>A CHANGE TO ONE PART</p><p>of a food web can</p><p>affect other living things!</p>\n  </div>\n  <button class=\"btn alt abs\" data-drawer=\"web\" style=\"left:760px;top:474px;width:290px;height:56px;font-size:21px;\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5\" cy=\"12\" r=\"2.5\"/><circle cx=\"19\" cy=\"5\" r=\"2.5\"/><circle cx=\"19\" cy=\"19\" r=\"2.5\"/><path d=\"M7.3 11 16.7 6M7.3 13l9.4 5\"/></svg>My food web</button>\n  <button class=\"btn gold abs\" id=\"clueBtn\" style=\"left:1070px;top:474px;width:262px;height:56px;font-size:21px;\" aria-expanded=\"false\" aria-controls=\"clueCard\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z\"/></svg>Need a clue?</button>\n  <div class=\"pop-card\" id=\"clueCard\" hidden style=\"left:880px;top:548px;width:452px;\">\n    <div id=\"clueK\" style=\"font-size:18px;font-weight:900;color:var(--gold-ink);letter-spacing:.06em;\"></div>\n    <div id=\"clueT\" style=\"font-size:23px;font-weight:800;line-height:1.35;\"></div>\n    <div style=\"display:flex;gap:22px;\">\n      <button class=\"linkbtn\" id=\"clueMore\">Another clue</button>\n      <button class=\"linkbtn\" id=\"clueClose\">Close clue</button>\n    </div>\n  </div>\n  <div id=\"opts\"></div>\n  <div class=\"tb c fit\" data-fs=\"35.7\" style=\"left:1401px;top:494px;width:453px;height:92px;font-weight:900;color:var(--green-2);line-height:1.25;\">\n    <p>Why do you think that</p><p>may happen?</p>\n  </div>\n  <textarea class=\"field\" id=\"why\" style=\"left:1462px;top:602px;width:410px;height:318px;font-size:26px;line-height:44.6px;padding-top:4px;\" placeholder=\"I think this because\u2026\" aria-label=\"Why do you think that may happen?\"></textarea>\n  <div class=\"wc\" data-for=\"why\" data-min=\"8\" style=\"left:1462px;top:926px;\"></div>\n  <button class=\"hot next\" data-next=\"m3\" style=\"left:1669px;top:996px;width:235px;height:70px;\" aria-label=\"Next: Mission 3\"></button>\n  <button class=\"lock\" data-lock=\"m2\" style=\"left:1669px;top:996px;width:235px;height:70px;\" aria-label=\"Next is locked\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#22220c\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/></svg></button>\n  <div class=\"locknote\" data-locknote=\"m2\" style=\"left:1440px;top:952px;width:460px;\">Choose for all five animals and explain why</div>\n</section>\n\n<!-- ================= MISSION 3 ================= -->\n<section class=\"slide\" id=\"m3\" style=\"background-image:url(__BASE__bg4.jpg)\" aria-label=\"Mission 3: investigate the change\">\n  <div class=\"tb title fit pop\" data-fs=\"96\" style=\"left:-196px;top:50px;width:1298px;height:291px;--r:-13.19deg;transform:rotate(-13.19deg);line-height:.98;\">\n    <p class=\"blk\">MISSION 3</p>\n    <p class=\"red\" style=\"font-size:.9em\">INVESTIGATE THE</p>\n    <p class=\"red\" style=\"font-size:.9em\">CHANGE</p>\n  </div>\n  <div class=\"tb c fit pop d1\" data-fs=\"34\" style=\"left:945px;top:42px;width:840px;height:196px;font-weight:900;color:var(--ink);line-height:1.3;\">\n    <p>What could happen when</p>\n    <p><span class=\"alert u\">some eucalyptus trees are lost?</span></p>\n    <p>Investigate the model and follow the ripple effect.</p>\n  </div>\n  <button class=\"btn abs\" id=\"step1\" style=\"left:975px;top:244px;width:530px;height:58px;font-size:22px;\">1 \u00b7 Show direct effects</button>\n  <button class=\"btn abs\" id=\"step2\" style=\"left:975px;top:312px;width:530px;height:58px;font-size:22px;\" disabled>2 \u00b7 Follow the ripple</button>\n  <div class=\"tb c fit\" data-fs=\"19\" style=\"left:1600px;top:266px;width:282px;height:160px;--r:18.82deg;transform:rotate(18.82deg);font-weight:900;color:#000;line-height:1.22;white-space:nowrap;\">\n    <p class=\"title red\" style=\"font-size:1.68em;line-height:1.1\">REMEMBER:</p>\n    <p>A <span class=\"alert\">DIRECT EFFECT</span> comes first.</p>\n    <p>A <span class=\"alert\">ripple effect</span> can follow</p>\n    <p>as the change spreads</p>\n    <p>through the food web.</p>\n  </div>\n  <div class=\"survey\" style=\"left:70px;top:478px;width:1300px;height:70px;\">\n    <div style=\"font:700 18px/1.1 var(--f-futura);color:var(--green);width:170px;\">RANGER SURVEY<br><span style=\"font:800 13px/1.2 var(--f-vag);color:var(--muted)\">Simulated data for this model</span></div>\n    <div class=\"cells\" id=\"surveyCells\"></div>\n  </div>\n  <div class=\"fixlabel\" style=\"left:428px;top:680px;width:178px;height:28px;\">Christmas beetle</div>\n  <div id=\"web3\"></div>\n  <div class=\"abs\" style=\"left:1506px;top:612px;width:302px;height:100px;background:#f4f3ee;font-size:20px;font-weight:800;line-height:1.3;padding:2px 4px;\">Look back at your prediction. Which parts matched the model? What would you change now?</div>\n  <textarea class=\"field\" id=\"reflect\" style=\"left:1506px;top:718px;width:302px;height:226px;background:#f4f3f1;border-radius:10px;padding:12px 14px;font-size:21px;line-height:29px;\" placeholder=\"I noticed that\u2026&#10;&#10;I would change\u2026\" aria-label=\"Did your prediction match? Write what you noticed and what you would change\"></textarea>\n  <div class=\"wc\" data-for=\"reflect\" data-min=\"8\" style=\"left:1512px;top:952px;\"></div>\n  <button class=\"hot next\" data-next=\"final\" style=\"left:1668px;top:996px;width:235px;height:70px;\" aria-label=\"Next: final challenge\"></button>\n  <button class=\"lock\" data-lock=\"m3\" style=\"left:1668px;top:996px;width:235px;height:70px;\" aria-label=\"Next is locked\"><svg width=\"36\" height=\"36\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#22220c\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/></svg></button>\n</section>\n\n<!-- ================= FINAL ================= -->\n<section class=\"slide\" id=\"final\" style=\"background-image:url(__BASE__bg5.jpg)\" aria-label=\"Final challenge: rescue the ecosystem\">\n  <div class=\"tb title fit pop\" data-fs=\"88\" style=\"left:-95px;top:88px;width:1170px;height:183px;--r:-13.23deg;transform:rotate(-13.23deg);\">\n    <p class=\"blk\">FINAL CHALLENGE</p>\n    <p class=\"red\" style=\"font-size:.9em\">RESCUE THE ECOSYSTEM</p>\n  </div>\n  <div class=\"tb c fit pop d1\" data-fs=\"38\" style=\"left:540px;top:244px;width:966px;height:196px;font-weight:900;color:var(--ink);line-height:1.25;\">\n    <p>Some eucalyptus trees have been lost</p>\n    <p style=\"font-size:.85em\">Fewer leaves means less food, and the effects</p>\n    <p style=\"font-size:.85em\">may have spread through the food web.</p>\n  </div>\n  <div class=\"tb c fit pop d2\" data-fs=\"36\" style=\"left:470px;top:448px;width:1060px;height:50px;font-weight:900;color:var(--alert);line-height:1.2;text-shadow:0 0 12px rgba(255,255,255,.9),0 0 3px #fff;white-space:nowrap;\">\n    <p>Which plan could best help the food web recover?</p>\n  </div>\n  <button class=\"btn alt abs\" data-drawer=\"survey\" style=\"left:1560px;top:420px;width:330px;height:64px;font-size:22px;\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M20 20l-4-4\"/></svg>Review evidence</button>\n  <div class=\"plan\" id=\"p-restore\" style=\"left:204px;top:507px;width:511px;height:368px;\"></div>\n  <div class=\"plan\" id=\"p-possums\" style=\"left:761px;top:506px;width:511px;height:370px;\"></div>\n  <div class=\"plan\" id=\"p-predators\" style=\"left:1318px;top:506px;width:511px;height:365px;\"></div>\n  <div id=\"chosenCovers\"></div>\n  <button class=\"hot\" data-plan=\"restore\" style=\"left:227px;top:804px;width:465px;height:62px;border-radius:22px;\" aria-label=\"Choose plan: restore the eucalyptus\"></button>\n  <button class=\"hot\" data-plan=\"possums\" style=\"left:790px;top:804px;width:451px;height:62px;border-radius:22px;\" aria-label=\"Choose plan: add more possums\"></button>\n  <button class=\"hot\" data-plan=\"predators\" style=\"left:1345px;top:797px;width:455px;height:62px;border-radius:22px;\" aria-label=\"Choose plan: remove predators\"></button>\n  <textarea class=\"field\" id=\"because\" style=\"left:347px;top:1002px;width:650px;height:52px;background:#faf9fa;font-size:20px;line-height:24px;padding:4px 14px;border-radius:10px;\" placeholder=\"Type your answer here\u2026\" aria-label=\"I chose this plan because\"></textarea>\n  <textarea class=\"field\" id=\"help\" style=\"left:1027px;top:1002px;width:660px;height:52px;background:#faf9fa;font-size:20px;line-height:24px;padding:4px 14px;border-radius:10px;\" placeholder=\"Type your answer here\u2026\" aria-label=\"This could help\"></textarea>\n  <div class=\"wc\" data-for=\"because\" data-min=\"6\" style=\"left:880px;top:974px;\"></div>\n  <div class=\"wc\" data-for=\"help\" data-min=\"5\" style=\"left:1570px;top:974px;\"></div>\n  <button class=\"btn gold abs\" id=\"submitPlan\" style=\"left:1702px;top:954px;width:206px;height:112px;font-size:22px;\">Submit my<br>rescue plan</button>\n  <div class=\"locknote\" style=\"left:1612px;top:896px;width:300px;\">Feedback appears after you submit</div>\n\n  <div class=\"modalwrap\" id=\"fbWrap\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"fbTitle\">\n    <div class=\"modal\" id=\"fbModal\">\n      <div class=\"kicker\" id=\"fbKicker\"></div>\n      <h2 id=\"fbTitle\"></h2>\n      <div id=\"fbBody\" style=\"display:flex;flex-direction:column;gap:16px;\"></div>\n      <div class=\"mrow\" id=\"fbBtns\"></div>\n    </div>\n  </div>\n</section>\n\n<!-- ================= REPORT ================= -->\n<section class=\"slide\" id=\"report\" style=\"background-image:url(__BASE__bg1.jpg)\" aria-label=\"My mission report\">\n  <div class=\"veil\"></div>\n  <div class=\"paper\" style=\"left:90px;top:50px;width:1740px;height:980px;padding:40px 50px;display:flex;flex-direction:column;gap:24px;\">\n    <div style=\"display:flex;align-items:flex-end;justify-content:space-between;\">\n      <div class=\"title\" style=\"font-size:84px;text-align:left\"><span class=\"blk\">MY MISSION</span> <span class=\"red\">REPORT</span></div>\n      <div style=\"font-size:24px;font-weight:800;color:var(--muted);\">Take a screenshot to share with your teacher.</div>\n    </div>\n    <div id=\"reportGrid\" style=\"display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;flex-grow:1;min-height:0;\"></div>\n    <div style=\"display:flex;justify-content:flex-end;gap:16px;\">\n      <button class=\"btn\" data-go=\"map\" style=\"height:72px;padding:0 30px;font-size:24px;\">Back to mission map</button>\n    </div>\n  </div>\n</section>\n\n<!-- ================= TEACHER ================= -->\n<section class=\"slide\" id=\"teacher\" style=\"background:var(--paper)\" aria-label=\"Teacher notes\">\n  <div class=\"abs\" style=\"left:0;top:0;width:1920px;height:1080px;padding:40px 60px;display:flex;flex-direction:column;gap:22px;\">\n    <div style=\"display:flex;align-items:flex-end;justify-content:space-between;\">\n      <div class=\"title\" style=\"font-size:76px;text-align:left;margin-left:70px\"><span class=\"blk\">TEACHER</span> <span class=\"red\">NOTES</span></div>\n      <div style=\"font-size:22px;font-weight:800;color:var(--muted);\">Stage 3 \u00b7 about 60 minutes \u00b7 pairs on iPads or laptops</div>\n    </div>\n    <div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;flex-grow:1;min-height:0;\">\n      <div class=\"tsec\">\n        <div class=\"h\">Lesson sequence (5E)</div>\n        <div class=\"tph\"><b>Engage</b><span>Title screen and inquiry question. Ask what students think happens to animals when trees are lost.</span></div>\n        <div class=\"tph\"><b>Explore</b><span>Mission 1: pairs build and check the web. Listen to how they talk about the arrows.</span></div>\n        <div class=\"tph\"><b>Explain</b><span>Pause the class. Share webs and name producer, consumer, predator, prey and energy flow.</span></div>\n        <div class=\"tph\"><b>Elaborate</b><span>Missions 2 and 3 run as a Predict\u2013Observe\u2013Explain cycle, comparing predictions with the model.</span></div>\n        <div class=\"tph\"><b>Evaluate</b><span>Final challenge, then the mission report screenshot.</span></div>\n        <p style=\"margin-top:6px;color:var(--muted)\">The Field kit (top-left button) lets students reopen their food web, predictions and survey data at any time. Reset clears all answers for the next student.</p>\n      </div>\n      <div class=\"tsec\">\n        <div class=\"h\">Syllabus links</div>\n        <p><b>ST3-SCI-01</b></p>\n        <p>Uses evidence to explain how scientific knowledge can be used to develop sustainable practices.</p>\n        <p>Relevant content:</p>\n        <p>\u2022 Interpret a food web that describes the flow of matter and energy between plants and animals in an ecosystem.</p>\n        <p>\u2022 Identify and describe how the loss or introduction of plants or animals affects an Australian ecosystem.</p>\n        <p><b>ST3-DAT-01</b></p>\n        <p>Interprets data to support explanations and arguments.</p>\n        <div class=\"h\" style=\"margin-top:8px\">Answer key</div>\n        <p>Sun \u2192 eucalyptus tree \u2192 Christmas beetle and brushtail possum. Christmas beetle \u2192 green tree frog and laughing kookaburra. Green tree frog \u2192 laughing kookaburra. Brushtail possum \u2192 powerful owl.</p>\n      </div>\n      <div class=\"tsec\">\n        <div class=\"h\">Listen for</div>\n        <p>\u201cThe arrow means \u2018eats\u2019\u201d, so the arrow gets read from the eater to the food. Mission 1 feedback targets this.</p>\n        <p>\u201cOnly the animals that eat leaves are affected.\u201d The ripple stage in Mission 3 challenges this.</p>\n        <p>\u201cRemoving predators always helps.\u201d Final challenge feedback challenges this.</p>\n        <div class=\"h\" style=\"margin-top:8px\">Discussion prompts</div>\n        <p>Why might a real kookaburra population change less than this model shows?</p>\n        <p>What could cause eucalyptus loss near our school, and who cares for that land?</p>\n        <div class=\"h\" style=\"margin-top:8px\">Credits</div>\n        <p>Images and illustrations sourced from Canva and Canva Code.</p>\n      </div>\n    </div>\n    <div style=\"display:flex;justify-content:flex-end;\">\n      <button class=\"btn\" data-go=\"map\" style=\"height:68px;padding:0 30px;font-size:24px;\">Back to mission map</button>\n    </div>\n  </div>\n</section>\n\n<!-- field kit (shown on all screens except the title) -->\n<button class=\"kit\" id=\"kitBtn\" aria-label=\"Open field kit\" hidden><svg width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"9.5\"/><path d=\"M15.5 8.5 13.5 13.5 8.5 15.5 10.5 10.5z\"/></svg></button>\n<div id=\"drawerWrap\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Field kit\">\n  <div id=\"drawerVeil\"></div>\n  <div id=\"drawer\">\n    <div style=\"display:flex;align-items:center;justify-content:space-between;\">\n      <div class=\"title\" style=\"font-size:56px;color:var(--red);text-align:left\">FIELD KIT</div>\n      <button id=\"drawerClose\" aria-label=\"Close field kit\" style=\"width:60px;height:60px;border-radius:50%;border:0;background:var(--green);display:grid;place-items:center;cursor:pointer;\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"M6 6l12 12M18 6 6 18\"/></svg></button>\n    </div>\n    <div class=\"tabs\" role=\"tablist\">\n      <button class=\"tab\" role=\"tab\" data-tab=\"web\">My food web</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"pred\">My prediction</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"survey\">Survey data</button>\n      <button class=\"tab\" role=\"tab\" data-tab=\"help\">Help</button>\n    </div>\n    <div id=\"dBody\"></div>\n    <div class=\"confirm\" id=\"resetConfirm\" hidden>\n      <span style=\"flex-grow:1\">Clear every answer and start again? This can\u2019t be undone.</span>\n      <button class=\"btn\" id=\"resetYes\" style=\"height:54px;padding:0 20px;font-size:19px;background:var(--down)\">Yes, reset</button>\n      <button class=\"btn alt\" id=\"resetNo\" style=\"height:54px;padding:0 20px;font-size:19px;\">Cancel</button>\n    </div>\n    <div class=\"dfoot\">\n      <button class=\"btn\" id=\"drawerBack\" style=\"height:66px;padding:0 24px;font-size:21px;flex-grow:1;\">Back to where I was</button>\n      <button class=\"btn alt\" data-go=\"map\" style=\"height:66px;padding:0 20px;font-size:21px;\">Map</button>\n      <button class=\"btn alt\" data-go=\"title\" style=\"height:66px;padding:0 20px;font-size:21px;\">Home</button>\n      <button class=\"btn alt\" id=\"resetBtn\" style=\"height:66px;padding:0 20px;font-size:21px;\">Reset</button>\n    </div>\n  </div>\n</div>\n\n<div id=\"toast\" role=\"status\" aria-live=\"polite\"></div>\n</div>\n</div>\n\n<div id=\"turn\"><div><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"10\" rx=\"2\"/><path d=\"M17 3l2 2-2 2M19 5h-5\"/></svg>Turn your device sideways to start the mission.</div></div>\n\n".split('__BASE__').join(BASE));
})();
(function(){var BASE=window.__ER_BASE__;

(function(){
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const stage=$('#stage');
let scale=1;
function fitStage(){const W=innerWidth,H=innerHeight;scale=Math.min(W/1920,H/1080);
  stage.style.transform=`translate(${(W-1920*scale)/2}px,${(H-1080*scale)/2}px) scale(${scale})`;}
addEventListener('resize',fitStage);fitStage();
const vp=document.getElementById('viewport');
const pin=()=>{[vp,stage,...document.querySelectorAll('.slide')].forEach(el=>{if(el.scrollTop||el.scrollLeft){el.scrollTop=0;el.scrollLeft=0;}});if(scrollX||scrollY)scrollTo(0,0);};
[vp,stage,...document.querySelectorAll('.slide')].forEach(el=>el.addEventListener('scroll',pin));addEventListener('scroll',pin);document.addEventListener('focusin',()=>requestAnimationFrame(pin));
function fitAll(){$$('.fit').forEach(el=>{let fs=parseFloat(el.dataset.fs);el.style.fontSize=fs+'px';
  const h=el.clientHeight,w=el.clientWidth;let g=0;
  while((el.scrollHeight>h+2||el.scrollWidth>w+2)&&g++<60){fs*=.97;el.style.fontSize=fs+'px';}});}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitAll);fitAll();

/* ---------- data ---------- */
const ORG={
  eu:{name:'Eucalyptus tree',short:'Eucalyptus',img:BASE+'t-eu.jpg',tray:[58,248]},
  beetle:{name:'Christmas beetle',short:'Beetles',img:BASE+'t-beetle.jpg',tray:[300,248]},
  possum:{name:'Brushtail possum',short:'Possums',img:BASE+'t-possum.jpg',tray:[58,490]},
  frog:{name:'Green tree frog',short:'Frogs',img:BASE+'t-frog.jpg',tray:[300,490]},
  kook:{name:'Laughing kookaburra',short:'Kookaburras',img:BASE+'t-kook.jpg',tray:[58,730]},
  owl:{name:'Powerful owl',short:'Owls',img:BASE+'t-owl.jpg',tray:[300,730]},
};
const ANIMALS=['beetle','possum','frog','kook','owl'];
const WORD={inc:'increase',dec:'decrease',same:'stay the same'};
const SURVEY={eu:['Eucalyptus trees',60,35],beetle:['Beetles',240,150],possum:['Possums',18,11],frog:['Frogs',30,22],owl:['Owls',4,3],kook:['Kookaburras',12,9]};
const S={place:{},webOK:false,attempts:0,assist:{},pred:{},clue:0,m3:{stage:0,rev:{}},plan:null,submitted:false,finished:false};
for(const k in ORG)S.place[k]=null;
const words=id=>{const v=($('#'+id)||{}).value||'';return v.trim().split(/\s+/).filter(Boolean).length;};
const MIN={discover:6,why:8,reflect:8,because:6,help:5};
const enough=id=>words(id)>=MIN[id];

/* ---------- toast ---------- */
const toast=$('#toast');let tt;
function say(msg,ms,warn){toast.innerHTML=msg;toast.classList.toggle('warn',!!warn);toast.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('show'),ms||4500);}

/* ---------- progress rules ---------- */
const done={
  m1:()=>S.webOK&&enough('discover'),
  m2:()=>ANIMALS.every(k=>S.pred[k])&&enough('why'),
  m3:()=>S.m3.stage>=4&&enough('reflect'),
  final:()=>S.finished
};
const unlocked={m1:()=>true,m2:()=>done.m1(),m3:()=>done.m1()&&done.m2(),final:()=>done.m1()&&done.m2()&&done.m3()};
function whyLocked(m){
  if(m==='m1'){ if(!S.webOK)return 'Check your food web first. <b>Next</b> unlocks when every organism is in the right place.';
    return 'Answer the food chain question first (at least 6 words).'; }
  if(m==='m2'){ const miss=ANIMALS.filter(k=>!S.pred[k]);
    if(miss.length){miss.forEach(k=>colGlow[k].classList.add('on'));return 'Choose <b>increase</b>, <b>decrease</b> or <b>stay the same</b> for every animal.';}
    return 'Explain <b>why</b> you think that may happen (at least 8 words).'; }
  if(m==='m3'){ if(S.m3.stage<4)return 'Finish the investigation first: use <b>Show direct effects</b>, then <b>Follow the ripple</b>.';
    return 'Write your reflection first (at least 8 words).'; }
  return '';
}
function refreshLocks(){
  ['m1','m2','m3'].forEach(m=>{const ok=done[m]();
    $$(`[data-lock="${m}"]`).forEach(l=>l.hidden=ok);
    $$(`[data-locknote="${m}"]`).forEach(l=>l.hidden=ok);});
  const n1=$('[data-locknote="m1"]');if(n1)n1.textContent=S.webOK?'Answer the food chain question to unlock':'Unlocks when your web is correct';
  const n2=$('[data-locknote="m2"]');if(n2)n2.textContent=ANIMALS.every(k=>S.pred[k])?'Explain why to unlock':'Choose for all five animals and explain why';
  $$('.wc').forEach(w=>{const id=w.dataset.for,n=words(id),min=+w.dataset.min;
    w.textContent=n>=min?`${n} words ✓`:`${n}/${min} words`;w.className='wc '+(n>=min?'ok':'no');});
}
$$('textarea').forEach(t=>t.addEventListener('input',refreshLocks));
$$('.lock').forEach(l=>l.addEventListener('click',()=>{const m=l.dataset.lock;say(whyLocked(m),4500,true);
  const f={m1:'discover',m2:'why',m3:'reflect'}[m];
  if((m==='m1'&&S.webOK)||(m==='m2'&&ANIMALS.every(k=>S.pred[k]))||(m==='m3'&&S.m3.stage>=4)){const t=$('#'+f);t.classList.remove('need');void t.offsetWidth;t.classList.add('need');t.focus();}}));

/* ---------- navigation ---------- */
let cur='title',lastMission='m1';
function go(id){
  if(unlocked[id]&&!unlocked[id]()){say('That mission is still locked. Finish the one before it first.',3500,true);return;}
  closeDrawer(true);
  if(id===cur){return;}
  $('#'+cur).classList.remove('on');cur=id;$('#'+id).classList.add('on');
  toast.classList.remove('show');
  $('#kitBtn').hidden=(id==='title');
  if(['m1','m2','m3','final'].includes(id))lastMission=id;
  if(id==='map')renderMap();
  if(id==='report')renderReport();
  if(id==='m3')startM3();
  refreshLocks();
}
$('#startBtn').onclick=()=>go('map');
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g)go(g.dataset.go);
  const n=e.target.closest('[data-next]');if(n)go(n.dataset.next);
  const d=e.target.closest('[data-drawer]');if(d)openDrawer(d.dataset.drawer);});

/* ---------- mission map ---------- */
const MAPM=[
  {id:'m1',k:'MISSION 1',n:'Build the food web',img:BASE+'t-eu.jpg'},
  {id:'m2',k:'MISSION 2',n:'Make a prediction',img:BASE+'t-frog.jpg'},
  {id:'m3',k:'MISSION 3',n:'Investigate the change',img:BASE+'t-possum.jpg'},
  {id:'final',k:'FINAL CHALLENGE',n:'Rescue the ecosystem',img:BASE+'t-owl.jpg'}];
const ICON={
  done:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M7 12.5l3.2 3L17 9"/></svg>',
  prog:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  lock:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'};
function started(id){
  if(id==='m1')return Object.values(S.place).some(Boolean);
  if(id==='m2')return Object.keys(S.pred).length>0||!!$('#why').value.trim();
  if(id==='m3')return S.m3.stage>0;
  return !!S.plan;}
function renderMap(){
  const box=$('#mapCards');box.innerHTML='';
  const hereId=MAPM.find(m=>unlocked[m.id]()&&!done[m.id]())?.id;
  MAPM.forEach((m,i)=>{
    const open=unlocked[m.id](),fin=done[m.id](),here=m.id===hereId;
    const prev=MAPM[i-1];
    const c=document.createElement('div');c.className='mcard'+(here?' here':'')+(open?'':' locked');
    let st,btn;
    if(fin){st=`<div class="st" style="color:var(--green)">${ICON.done}Complete</div>`;btn=`<button class="btn alt" data-go="${m.id}" style="height:58px;font-size:22px">Revisit</button>`;}
    else if(open){const began=started(m.id);st=`<div class="st" style="color:var(--gold-ink)">${ICON.prog}${began?'In progress':'Ready to start'}</div>`;btn=`<button class="btn" data-go="${m.id}" style="height:58px;font-size:22px">${began?'Continue':'Start'}</button>`;}
    else{st=`<div class="st" style="color:var(--muted)">${ICON.lock}Finish ${prev.k.toLowerCase().replace('mission','Mission')} first</div>`;btn=`<button class="btn" disabled style="height:58px;font-size:22px">Locked</button>`;}
    c.innerHTML=`${here?'<div class="herechip">YOU ARE HERE</div>':''}<div class="thumb"><img src="${m.img}" alt=""></div><div class="k">${m.k}</div><div class="n">${m.n}</div>${st}${btn}`;
    box.appendChild(c);
  });
  $('#mapReport').disabled=!S.finished;
}
$('#mapReport').onclick=()=>{if(S.finished)go('report');};

/* ================= MISSION 1 ================= */
const SW=190,SH=178;
const SLOTS={eu:[850,566],beetle:[1115,440],frog:[1385,440],kook:[1655,440],possum:[1115,715],owl:[1655,715]};
const ROLES={eu:['Producer',748],beetle:['Consumer',621],frog:['Consumer',621],kook:['Consumer',621],possum:['Consumer',896],owl:['Consumer',896]};
const SLOT_HINT={
  eu:'The Sun’s energy goes into this box first. Which living thing makes its own food using sunlight?',
  beetle:'This box is eaten by two animals. Which small animal eats eucalyptus leaves and is eaten by frogs and kookaburras?',
  frog:'This animal eats the one before it, and is then eaten by the kookaburra.',
  kook:'This animal eats both the beetle and the frog.',
  possum:'This animal eats eucalyptus leaves and is hunted by the powerful owl.',
  owl:'This predator hunts possums at night.'};
const ARROWS=[
  ['M822 655 L842 655','sun'],['M1044 612 L1106 548','eu'],['M1044 700 L1106 776','eu'],
  ['M1310 529 L1376 529','beetle'],['M1580 529 L1646 529','frog'],
  ['M1212 622 C 1320 700, 1640 700, 1748 626','beetle'],['M1310 804 L1646 804','possum']];
function arrowSVG(markerId,flow){
  const rays='M770 591v-12M770 731v-12M706 655h-12M846 655h-12M725 610l-9-9M824 709l-9-9M725 700l-9 9M824 601l-9 9';
  return `<defs><marker id="${markerId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#5b5445"/></marker></defs>
  <circle cx="770" cy="655" r="44" fill="#f2c230"/><path d="${rays}" stroke="#f2c230" stroke-width="7" stroke-linecap="round"/>
  <g stroke="#5b5445" stroke-width="7" stroke-linecap="round">${ARROWS.map(a=>`<path class="${flow?'flow':''}" d="${a[0]}" marker-end="url(#${markerId})"/>`).join('')}</g>`;
}
$('#arrows').innerHTML=arrowSVG('ah',false);
const TW=219,TH=224;
const tileEl={},phEl={},slotEl={},roleEl={};
for(const k in SLOTS){
  const [x,y]=SLOTS[k];const d=document.createElement('div');d.className='slot';
  Object.assign(d.style,{left:x+'px',top:y+'px',width:SW+'px',height:SH+'px'});
  $('#slots').appendChild(d);slotEl[k]=d;
  d.addEventListener('click',()=>{if(selected){dropInto(selected,k);clearSel();}});
  const r=document.createElement('div');r.className='role';r.textContent=ROLES[k][0];
  Object.assign(r.style,{left:x+'px',top:ROLES[k][1]+'px'});$('#roles').appendChild(r);roleEl[k]=r;
}
for(const k in ORG){
  const o=ORG[k];
  const p=document.createElement('div');p.className='ph';
  Object.assign(p.style,{left:o.tray[0]+'px',top:o.tray[1]+'px',width:TW+'px',height:TH+'px',display:'none'});
  $('#tray').appendChild(p);phEl[k]=p;
  p.addEventListener('click',()=>{if(selected&&S.place[selected]){const s=selected;clearSel();dropInto(s,null);}});
  const t=document.createElement('div');t.className='tile';t.tabIndex=0;t.setAttribute('role','button');
  t.setAttribute('aria-label',o.name);t.style.backgroundImage=`url(${o.img})`;
  if(k==='eu')t.innerHTML='<span class="relabel">Eucalyptus tree</span>';
  $('#tiles').appendChild(t);tileEl[k]=t;bindDrag(t,k);
  t.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!S.webOK)toggleSel(k);}});
}
function tileRect(k){const s=S.place[k];
  if(!s){const [x,y]=ORG[k].tray;return [x,y,TW,TH];}
  const [x,y]=SLOTS[s];const sc=Math.min((SW-14)/TW,(SH-10)/TH);const w=TW*sc,h=TH*sc;
  return [x+(SW-w)/2,y+(SH-h)/2,w,h];}
function layout(){for(const k in ORG){const [x,y,w,h]=tileRect(k),t=tileEl[k];
  if(!t.classList.contains('dragging'))Object.assign(t.style,{left:x+'px',top:y+'px',width:w+'px',height:h+'px'});
  phEl[k].style.display=S.place[k]?'block':'none';}}
layout();
const occupant=slot=>Object.keys(S.place).find(k=>S.place[k]===slot)||null;
function clearMarks(){for(const s in slotEl)slotEl[s].classList.remove('wrong');}
function dropInto(k,slot){
  if(S.webOK)return;
  const from=S.place[k];
  if(slot){const occ=occupant(slot);if(occ&&occ!==k)S.place[occ]=from;}
  S.place[k]=slot;clearMarks();
  for(const s in S.assist){if(occupant(s)!==s){delete S.assist[s];slotEl[s].classList.remove('assist');}}
  layout();
}
let selected=null;
function toggleSel(k){if(selected===k){clearSel();return;}clearSel();selected=k;tileEl[k].classList.add('sel');
  for(const s in slotEl)slotEl[s].classList.add('target');say('Now tap a space in your food web.',2400);}
function clearSel(){if(selected)tileEl[selected].classList.remove('sel');selected=null;for(const s in slotEl)slotEl[s].classList.remove('target');}
function toStage(e){const r=stage.getBoundingClientRect();return [(e.clientX-r.left)/scale,(e.clientY-r.top)/scale];}
function slotAt(x,y){for(const k in SLOTS){const [sx,sy]=SLOTS[k];if(x>=sx-18&&x<=sx+SW+18&&y>=sy-18&&y<=sy+SH+18)return k;}return null;}
function bindDrag(t,k){
  let start=null,off=null,moved=false,hov=null;
  t.addEventListener('pointerdown',e=>{if(e.button>0||S.webOK)return;t.setPointerCapture(e.pointerId);
    const [x,y]=toStage(e);start=[x,y];moved=false;off=[x-parseFloat(t.style.left),y-parseFloat(t.style.top)];});
  t.addEventListener('pointermove',e=>{if(!start)return;const [x,y]=toStage(e);
    if(!moved&&Math.hypot(x-start[0],y-start[1])>8){moved=true;clearSel();t.classList.add('dragging');
      const cw=parseFloat(t.style.width),ch=parseFloat(t.style.height);off=[off[0]*TW/cw,off[1]*TH/ch];
      t.style.width=TW+'px';t.style.height=TH+'px';}
    if(moved){t.style.left=(x-off[0])+'px';t.style.top=(y-off[1])+'px';const s=slotAt(x,y);
      if(s!==hov){if(hov)slotEl[hov].classList.remove('hover');hov=s;if(s)slotEl[s].classList.add('hover');}}});
  t.addEventListener('pointerup',e=>{if(!start)return;const [x,y]=toStage(e);start=null;
    if(hov)slotEl[hov].classList.remove('hover');hov=null;
    if(!moved){toggleSel(k);return;}t.classList.remove('dragging');dropInto(k,slotAt(x,y));});
  t.addEventListener('pointercancel',()=>{start=null;t.classList.remove('dragging');layout();});
}
const fb=$('#m1fb');
const FBI={bad:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b0d0d" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M12 7v6M12 17h.01"/></svg>',
  help:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8a6a00" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/></svg>',
  good:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3f7a2e" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M7 12.5l3.2 3L17 9"/></svg>'};
function showFb(kind,html){fb.className='fb'+(kind==='good'?' good':kind==='help'?' help':'');fb.innerHTML=FBI[kind]+`<div>${html}</div>`;fb.hidden=false;}
const ORDER=['eu','beetle','possum','frog','kook','owl'];
$('#checkWeb').onclick=()=>{
  if(S.webOK){say('Your web is already correct. Answer the food chain question, then press <b>Next</b>.',3500);return;}
  const placed=Object.values(S.place).filter(Boolean).length;
  if(placed<6){say(`Place all six organisms first. ${6-placed} still to go.`,3500,true);return;}
  clearMarks();
  const wrong=ORDER.filter(s=>occupant(s)!==s);
  if(!wrong.length){
    S.webOK=true;fb.hidden=true;
    for(const s in slotEl){slotEl[s].classList.remove('assist');slotEl[s].classList.add('right');roleEl[s].classList.add('show');}
    for(const k in tileEl)tileEl[k].classList.add('fixed');
    $('#arrows').innerHTML=arrowSVG('ah',true);
    showFb('good',`Your food web is correct! Energy flows from the <b>Sun</b> to the <b>eucalyptus</b> (the producer), then through each consumer. Now answer the question below.`);
    $('#discover').classList.add('need');
    refreshLocks();return;
  }
  S.attempts++;
  if(S.attempts===1){
    showFb('bad',`Not yet. <b>${wrong.length}</b> organism${wrong.length>1?'s need':' needs'} to move. Start at the Sun and follow each arrow. Does it point from the food to the living thing that eats it? <b>Hint 1 of 3</b>`);
  } else if(S.attempts===2){
    const s=wrong[0],occ=occupant(s);slotEl[s].classList.add('wrong');
    showFb('bad',`Look at the <b>${ORG[occ].name.toLowerCase()}</b> in the red box. ${SLOT_HINT[s]} <b>Hint 2 of 3</b>`);
  } else {
    const s=wrong[0];dropInto(s,s);S.assist[s]=true;slotEl[s].classList.add('assist');
    const left=ORDER.filter(x=>occupant(x)!==x).length;
    showFb('help',`Here’s a start: the <b>${ORG[s].name.toLowerCase()}</b> belongs in the gold box. ${SLOT_HINT[s]} ${left?`<b>${left}</b> more to fix, then check again.`:'Press <b>Check my web</b> again.'}`);
  }
};

/* ================= MISSION 2 ================= */
const ROWS={inc:800,dec:868,same:935};
const colGlow={};
ANIMALS.forEach((k,i)=>{const x=62+262*i;
  const g=document.createElement('div');g.className='colglow';
  Object.assign(g.style,{left:(x-8)+'px',top:'792px',width:'238px',height:'208px'});$('#opts').appendChild(g);colGlow[k]=g;
  for(const v in ROWS){const b=document.createElement('button');b.className='opt';b.dataset.k=k;b.dataset.v=v;
    Object.assign(b.style,{left:x+'px',top:ROWS[v]+'px',width:'222px',height:'58px'});
    b.setAttribute('aria-label',`${ORG[k].name}: ${WORD[v]}`);b.setAttribute('aria-pressed','false');
    b.onclick=()=>{S.pred[k]=v;g.classList.remove('on');
      $$(`.opt[data-k="${k}"]`).forEach(o=>{const on=o.dataset.v===v;o.classList.toggle('chosen',on);o.classList.toggle('faded',!on);o.setAttribute('aria-pressed',on);});
      refreshLocks();};
    $('#opts').appendChild(b);}});
const CLUES=['Start with the animals that get their food straight from eucalyptus. What could happen to them first?',
  'Now follow the arrows. If there are fewer beetles and possums, what could that mean for the animals that eat them?'];
function showClue(){$('#clueK').textContent=`CLUE ${S.clue+1} OF ${CLUES.length}`;$('#clueT').textContent=CLUES[S.clue];
  $('#clueMore').hidden=S.clue>=CLUES.length-1;$('#clueCard').hidden=false;$('#clueBtn').setAttribute('aria-expanded','true');}
$('#clueBtn').onclick=()=>{if($('#clueCard').hidden)showClue();else{$('#clueCard').hidden=true;$('#clueBtn').setAttribute('aria-expanded','false');}};
$('#clueMore').onclick=()=>{S.clue=Math.min(S.clue+1,CLUES.length-1);showClue();};
$('#clueClose').onclick=()=>{$('#clueCard').hidden=true;$('#clueBtn').setAttribute('aria-expanded','false');};

/* ================= MISSION 3 ================= */
const CARDS={
  eu:{r:[130,665,210,245],b:[140,852,195,52]},
  beetle:{r:[420,555,192,208],b:[428,708,178,50],c:[400,566]},
  frog:{r:[712,555,205,208],b:[718,708,190,50],c:[697,566]},
  kook:{r:[1035,558,215,208],b:[1042,712,202,50],c:[1026,570]},
  possum:{r:[465,800,212,215],b:[472,958,198,52],c:[690,792]},
  owl:{r:[1000,800,212,215],b:[1008,958,198,52],c:[1222,806]}};
const cardEl={},coverEl={},badgeEl={},cmpEl={};
for(const k in CARDS){const c=CARDS[k];
  const cv=document.createElement('div');cv.className='cover';
  Object.assign(cv.style,{left:c.b[0]+'px',top:c.b[1]+'px',width:c.b[2]+'px',height:c.b[3]+'px'});
  cv.innerHTML='<b>?</b>Not yet';$('#web3').appendChild(cv);coverEl[k]=cv;
  const bd=document.createElement('div');bd.className='badge';bd.hidden=true;
  Object.assign(bd.style,{left:c.b[0]+'px',top:c.b[1]+'px',width:c.b[2]+'px',height:c.b[3]+'px'});
  bd.innerHTML=`<i>↓</i>${k==='eu'?'Fewer trees':'May decrease'}`;$('#web3').appendChild(bd);badgeEl[k]=bd;
  const b=document.createElement('button');b.className='card';
  Object.assign(b.style,{left:c.r[0]+'px',top:c.r[1]+'px',width:c.r[2]+'px',height:c.r[3]+'px'});
  b.setAttribute('aria-label',ORG[k].name);b.onclick=()=>tapCard(k);$('#web3').appendChild(b);cardEl[k]=b;
  if(c.c){const m=document.createElement('div');m.className='cmp';Object.assign(m.style,{left:c.c[0]+'px',top:c.c[1]+'px'});$('#web3').appendChild(m);cmpEl[k]=m;}
}
const DIRECT=['beetle','possum'],RIPPLE=['frog','owl','kook'];
function renderSurvey(){
  $('#surveyCells').innerHTML=['eu','beetle','possum','frog','owl','kook'].map(k=>{const [n,a,b]=SURVEY[k];
    const shown=k==='eu'?S.m3.stage>=1:S.m3.rev[k];return `<div>${n}<br><b>${shown?`${a} → ${b}`:'? → ?'}</b></div>`;}).join('');}
function setM3(){
  const st=S.m3.stage,s1=$('#step1'),s2=$('#step2');
  s1.disabled=false;s1.className='btn abs '+(st>=1?(DIRECT.every(k=>S.m3.rev[k])?'done':''):'pulse');
  s1.innerHTML=(st>=2?'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4L19 7"/></svg>':'')+'1 · Show direct effects';
  s2.disabled=st<2;s2.className='btn abs '+(st===2?'pulse':st>=4?'done':'');
  s2.innerHTML=(st>=4?'<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4L19 7"/></svg>':'')+'2 · Follow the ripple';
  const can=st===1?DIRECT:st===3?RIPPLE:[];
  for(const k in cardEl){const r=!!S.m3.rev[k]||(k==='eu'&&st>=1);cardEl[k].classList.toggle('can',can.includes(k)&&!r);
    coverEl[k].hidden=r;badgeEl[k].hidden=!r;
    coverEl[k].innerHTML=`<b>?</b>${can.includes(k)?'Tap to find out':'Not yet'}`;}
  renderSurvey();refreshLocks();
}
function startM3(){setM3();if(S.m3.stage===0)setTimeout(()=>{if(cur==='m3'&&S.m3.stage===0)say('Start with the change. Press <b>1 · Show direct effects</b>.',4000);},600);}
$('#step1').onclick=()=>{
  if(S.m3.stage===0){S.m3.stage=1;setM3();say('Fewer trees means fewer leaves. Which animals eat eucalyptus leaves directly? <b>Tap them.</b>',5000);}
  else if(S.m3.stage===1)say('Tap the glowing cards to see the direct effects.',3000);
};
$('#step2').onclick=()=>{
  if(S.m3.stage===2){S.m3.stage=3;setM3();say('Less food for beetles and possums could affect the animals that eat them. <b>Tap each glowing card.</b>',5000);}
  else if(S.m3.stage===3)say('Tap the glowing cards to follow the ripple.',3000);
};
function tapCard(k){
  const st=S.m3.stage,can=st===1?DIRECT:st===3?RIPPLE:[];
  if(S.m3.rev[k]||k==='eu')return;
  if(!can.includes(k)){say(st<1?'Press <b>1 · Show direct effects</b> first.':st<3?'Direct effects come first. Finish those, then press <b>2 · Follow the ripple</b>.':'Tap a glowing card.',3500,true);return;}
  S.m3.rev[k]=true;
  const p=S.pred[k],m=cmpEl[k];
  m.innerHTML=`<div class="you">You: ${p?WORD[p]:'no prediction'}</div><div class="model">Model: may decrease</div>`;
  requestAnimationFrame(()=>m.classList.add('show'));
  if(st===1&&DIRECT.every(x=>S.m3.rev[x])){S.m3.stage=2;setTimeout(()=>say('With less food, beetle and possum numbers <b>may decrease</b>. Now press <b>2 · Follow the ripple</b>.',5000),350);}
  if(st===3&&RIPPLE.every(x=>S.m3.rev[x])){S.m3.stage=4;setTimeout(()=>{say('In this model, one change could ripple through the whole food web. Real populations can vary. <b>Did your prediction match?</b> Write your reflection.',7000);
    const t=$('#reflect');t.classList.remove('need');void t.offsetWidth;t.classList.add('need');},350);}
  setM3();
}

/* ================= FINAL ================= */
const PLAN_NAMES={restore:'Restore the eucalyptus',possums:'Add more possums',predators:'Remove predators'};
const PLAN_BTN={restore:[227,804,465,62],possums:[790,804,451,62],predators:[1345,797,455,62]};
function renderPlans(){
  $('#chosenCovers').innerHTML='';
  for(const p in PLAN_NAMES){const el=$('#p-'+p);el.classList.toggle('picked',S.plan===p);el.innerHTML=S.plan===p?'<div class="tag">SELECTED</div>':'';}
  if(S.plan){const [x,y,w,h]=PLAN_BTN[S.plan];const c=document.createElement('div');c.className='chosen-cover';
    Object.assign(c.style,{left:x+'px',top:y+'px',width:w+'px',height:h+'px'});
    c.innerHTML='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f2c230" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4L19 7"/></svg>PLAN CHOSEN';$('#chosenCovers').appendChild(c);}
}
$$('[data-plan]').forEach(b=>b.onclick=()=>{S.plan=b.dataset.plan;renderPlans();say(`You chose <b>${PLAN_NAMES[S.plan]}</b>. Now use evidence to explain your choice, then submit.`,3800);});
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const FB={
  restore:{ok:true,title:'Strong choice',body:()=>`<p>In this food web model, this plan deals most directly with the original change. Restoring eucalyptus could give leaf-eating animals more food, and that may help the whole food web recover over time.</p>
<div class="chain"><span>More eucalyptus</span><em>→</em><span>more food for beetles &amp; possums</span><em>→</em><span>may support frogs, kookaburras &amp; owls</span></div>`,
    think:'<b>Think further:</b> trees take years to grow. What else might slow the recovery, such as drought, bushfire or land clearing?'},
  possums:{ok:false,title:'Think again',body:()=>`<p>In this model, adding more possums means more animals need eucalyptus leaves that are already scarce. It doesn’t deal with the cause, which is the lost trees, and the leaves could become even harder to find.</p>`,
    think:'<b>Look back:</b> open your food web. What do possums need to survive?'},
  predators:{ok:false,title:'Think again',body:()=>`<p>Removing owls and kookaburras doesn’t bring back the lost eucalyptus. It could also disrupt other relationships in the food web. For example, more beetles and possums might survive to compete for the remaining leaves.</p>`,
    think:'<b>Look back:</b> where in the food web did the change begin?'}};
$('#submitPlan').onclick=()=>{
  if(!S.plan){say('Choose a plan first. Tap <b>Choose this plan</b> on one of the three cards.',3800,true);return;}
  for(const id of ['because','help'])if(!enough(id)){const t=$('#'+id);t.classList.remove('need');void t.offsetWidth;t.classList.add('need');t.focus();
    say(id==='because'?'Explain why you chose this plan (at least 6 words).':'Say how this plan could help (at least 5 words).',4000,true);return;}
  S.submitted=true;openFeedback();
};
function openFeedback(){
  const P=FB[S.plan],m=$('#fbModal');m.classList.toggle('bad',!P.ok);
  $('#fbKicker').textContent='YOUR PLAN: '+PLAN_NAMES[S.plan].toUpperCase();
  const t=$('#fbTitle');t.textContent=P.title;t.style.color=P.ok?'var(--green)':'var(--red)';
  $('#fbBody').innerHTML=P.body()+`<div class="quote"><div class="h">YOUR EVIDENCE</div><div class="t">“${esc($('#because').value.trim())}”</div><div class="t" style="font-size:20px">This could help: “${esc($('#help').value.trim())}”</div></div><p style="font-size:25px">${P.think}</p>`;
  const bx=$('#fbBtns');bx.innerHTML='';
  const mk=(label,cls,fn)=>{const b=document.createElement('button');b.className='btn '+(cls||'');b.style.cssText='height:76px;padding:0 30px;font-size:25px';b.textContent=label;b.onclick=fn;bx.appendChild(b);return b;};
  const first=mk(P.ok?'Revise my response':'Revise my plan','',()=>{closeFb();$('#because').focus();});
  mk('Review evidence','alt',()=>{closeFb();openDrawer('web');});
  if(P.ok)mk('Finish mission','alt',()=>{S.finished=true;closeFb();go('report');});
  $('#fbWrap').classList.add('show');setTimeout(()=>first.focus(),60);
  if(P.ok)confetti();
}
function closeFb(){$('#fbWrap').classList.remove('show');}
$('#fbWrap').addEventListener('click',e=>{if(e.target.id==='fbWrap')closeFb();});
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const cols=['#7a0000','#325221','#f2c230','#e86a9a','#3f7a2e','#f6efdc'];const host=$('#final');
  for(let i=0;i<80;i++){const c=document.createElement('div');c.className='confetti';c.style.left=(Math.random()*1920)+'px';c.style.background=cols[i%cols.length];host.appendChild(c);
    c.animate([{transform:'translate(0,0) rotate(0)'},{transform:`translate(${(Math.random()-.5)*300}px,1180px) rotate(${Math.random()*900}deg)`}],{duration:2200+Math.random()*1800,delay:Math.random()*500,easing:'cubic-bezier(.3,.6,.6,1)',fill:'forwards'}).onfinish=()=>c.remove();}}

/* ================= FIELD KIT ================= */
let tab='web';
function miniWeb(){
  const imgs=Object.keys(SLOTS).map(s=>{const occ=occupant(s);const [x,y]=SLOTS[s];
    return occ?`<img src="${ORG[occ].img}" alt="${ORG[occ].name}" style="position:absolute;left:${x-688+13}px;top:${y-348+7}px;width:164px;height:168px;border-radius:12px">`
      :`<div style="position:absolute;left:${x-688}px;top:${y-348}px;width:${SW}px;height:${SH}px;border:4px dashed #b9ab8c;border-radius:16px;box-sizing:border-box"></div>`;}).join('');
  return `<div class="minibox"><div class="inner"><svg style="position:absolute;left:0;top:0;width:1169px;height:571px" viewBox="688 348 1169 571" fill="none">${arrowSVG('am',false)}</svg>${imgs}</div></div>`;
}
function renderDrawer(){
  $$('.tab').forEach(t=>{t.classList.toggle('on',t.dataset.tab===tab);t.setAttribute('aria-selected',t.dataset.tab===tab);});
  const b=$('#dBody');let h='';
  if(tab==='web'){
    const n=Object.values(S.place).filter(Boolean).length;
    h+=`<div class="dnote" style="color:var(--green)">${S.webOK?'Built in Mission 1 and checked correct.':n?`Mission 1 in progress: ${n} of 6 placed.`:'You haven’t started your food web yet.'}</div>`+miniWeb();
    const d=$('#discover').value.trim();
    h+=`<div class="dnote">My food chains</div><div class="dbox">${d?esc(d):'<span style="color:var(--muted)">Not answered yet.</span>'}</div>`;
  } else if(tab==='pred'){
    h+=`<div class="prow h"><span>ANIMAL</span><span>MY PREDICTION</span><span>MODEL</span></div>`;
    ANIMALS.forEach(k=>{h+=`<div class="prow"><span>${ORG[k].name}</span><span>${S.pred[k]?WORD[S.pred[k]]:'<span style="color:var(--muted)">not chosen</span>'}</span><span>${S.m3.rev[k]?'may decrease':'<span style="color:var(--muted)">not yet investigated</span>'}</span></div>`;});
    const w=$('#why').value.trim();
    h+=`<div class="dnote">Why I think that may happen</div><div class="dbox">${w?esc(w):'<span style="color:var(--muted)">Not answered yet.</span>'}</div>`;
    const r=$('#reflect').value.trim();
    if(r)h+=`<div class="dnote">My reflection</div><div class="dbox">${esc(r)}</div>`;
  } else if(tab==='survey'){
    h+=`<div class="dnote">Ranger survey: number counted in the study area. <span style="color:var(--muted)">Simulated data for this model.</span></div>`;
    h+=`<div class="prow h"><span>ORGANISM</span><span>BEFORE</span><span>AFTER</span></div>`;
    ['eu','beetle','possum','frog','owl','kook'].forEach(k=>{const [n,a,z]=SURVEY[k];const shown=k==='eu'?S.m3.stage>=1:S.m3.rev[k];
      h+=`<div class="prow"><span>${n}</span><span>${shown?a:'?'}</span><span>${shown?z:'?'}</span></div>`;});
    h+=`<div class="dbox" style="font-size:19px">Values appear as you investigate in Mission 3. What pattern do you notice as you move up the food web?</div>`;
  } else {
    h+=`<div class="dbox"><b>How Ecosystem Rescue works</b><br>Work through the missions in order. Each one unlocks the next. Use the <b>Field kit</b> any time to look back at your food web, your predictions and the survey data, then press <b>Back to where I was</b>.</div>
    <div class="dbox"><b>Stuck?</b><br>Mission 1: press <b>Check my web</b> for hints. Mission 2: press <b>Need a clue?</b>. Mission 3: follow the glowing cards.</div>
    <div class="dbox"><b>Your answers</b> stay saved while this page is open. Reloading the page or pressing <b>Reset</b> clears them.</div>
    <button class="btn alt" data-go="teacher" style="height:62px;font-size:21px;align-self:flex-start;padding:0 24px">Teacher notes</button>`;
  }
  b.innerHTML=h;
}
let returnTo=null;
function openDrawer(t){tab=t||tab;renderDrawer();$('#resetConfirm').hidden=true;$('#drawerWrap').classList.add('show');setTimeout(()=>$('#drawerClose').focus(),50);}
function closeDrawer(silent){$('#drawerWrap').classList.remove('show');}
$('#kitBtn').onclick=()=>openDrawer();
$('#drawerClose').onclick=()=>closeDrawer();
$('#drawerBack').onclick=()=>closeDrawer();
$('#drawerVeil').onclick=()=>closeDrawer();
$$('.tab').forEach(t=>t.onclick=()=>{tab=t.dataset.tab;renderDrawer();});
$('#resetBtn').onclick=()=>{$('#resetConfirm').hidden=false;$('#resetNo').focus();};
$('#resetNo').onclick=()=>{$('#resetConfirm').hidden=true;};
$('#resetYes').onclick=resetAll;
addEventListener('keydown',e=>{if(e.key!=='Escape')return;
  if($('#fbWrap').classList.contains('show'))closeFb();else if($('#drawerWrap').classList.contains('show'))closeDrawer();
  else if(!$('#clueCard').hidden)$('#clueCard').hidden=true;});

/* ================= REPORT ================= */
function renderReport(){
  const d=esc($('#discover').value.trim()),w=esc($('#why').value.trim()),r=esc($('#reflect').value.trim());
  const grid=$('#reportGrid');
  const webImgs=ORDER.map(s=>`<img src="${ORG[s].img}" alt="${ORG[s].name}" style="width:100%;border-radius:8px">`).join('');
  grid.innerHTML=`
  <div class="rcard"><div class="h">My food web</div><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px">${webImgs}</div>
    <div class="rtext" style="color:var(--green)">Correct${S.attempts?` after ${S.attempts+1} checks`:' on the first check'}</div><div class="rtext">“${d}”</div></div>
  <div class="rcard"><div class="h">My predictions</div>${ANIMALS.map(k=>`<div class="rrow"><span>${ORG[k].name}</span><span>${WORD[S.pred[k]]||'–'}</span></div>`).join('')}
    <div class="rtext" style="color:var(--muted);font-size:18px">Model: all five may decrease when eucalyptus is lost.</div><div class="rtext" style="font-size:18px">“${w}”</div></div>
  <div class="rcard"><div class="h">What I noticed</div><div class="rtext">${r}</div></div>
  <div class="rcard"><div class="h">My rescue plan</div><div class="rtext" style="color:var(--green);font-size:22px">${PLAN_NAMES[S.plan]||''}</div>
    <div class="rtext">Because: ${esc($('#because').value.trim())}</div><div class="rtext">This could help: ${esc($('#help').value.trim())}</div></div>`;
}

/* ================= RESET ================= */
function resetAll(){
  for(const k in S.place)S.place[k]=null;S.webOK=false;S.attempts=0;S.assist={};clearSel();
  for(const s in slotEl){slotEl[s].className='slot';roleEl[s].classList.remove('show');}
  for(const k in tileEl)tileEl[k].classList.remove('fixed');
  $('#arrows').innerHTML=arrowSVG('ah',false);fb.hidden=true;layout();
  for(const k in S.pred)delete S.pred[k];S.clue=0;$('#clueCard').hidden=true;
  $$('.opt').forEach(o=>{o.classList.remove('chosen','faded');o.setAttribute('aria-pressed','false');});
  for(const k in colGlow)colGlow[k].classList.remove('on');
  S.m3={stage:0,rev:{}};for(const k in cmpEl){cmpEl[k].classList.remove('show');cmpEl[k].innerHTML='';}
  S.plan=null;S.submitted=false;S.finished=false;renderPlans();
  $$('textarea').forEach(t=>t.value='');
  setM3();refreshLocks();closeFb();go('title');
  say('Everything has been cleared. Ready for a new explorer.',3000);
}

setM3();renderPlans();refreshLocks();
})();

})();
