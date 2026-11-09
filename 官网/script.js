'use strict';
const scenes={
 interview:{title:'“能具体说说，你在这个项目里做了什么吗？”',desc:'AI 扮演招聘方，从自我介绍继续追问项目经历，让你练习把个人贡献讲得更具体。',goal:'清楚介绍项目经历，确认岗位要求与下一步安排。',role:'关注细节、会继续追问的招聘方',points:['自我介绍','项目追问','岗位确认']},
 inquiry:{title:'“您这批需要多少？希望什么时候交付？”',desc:'AI 扮演供应商，围绕数量、规格和交付条件继续追问，陪你练习把需求说完整。',goal:'问清报价、起订量、交付日期和付款条件。',role:'需要确认采购需求的供应商',points:['明确需求','比较条件','确认交付']},
 negotiate:{title:'“我理解您的情况，能再说明一下具体原因吗？”',desc:'AI 扮演售后客服，模拟核实、追问与不同回应，练习有依据地说明问题和期望方案。',goal:'说明商品问题，协商退款方案并确认处理时间。',role:'需要核实订单与问题的售后客服',points:['说明事实','表达诉求','回应异议']},
 custom:{title:'“这通电话，你最想达成什么结果？”',desc:'设定你和对方的角色，再补充目标与背景。把你的实际沟通难题，变成一场具体的对话练习。',goal:'例如：与合作方确认活动分工、预算和执行时间。',role:'由你设定的沟通对象',points:['设定双方角色','说明沟通目的','补充具体背景']}
};
const tabs=Array.from(document.querySelectorAll('[data-scene]'));
function selectScene(tab){const scene=scenes[tab.dataset.scene];if(!scene)return;tabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1});document.getElementById('scenario-panel').setAttribute('aria-labelledby',tab.id);for(const [id,value] of Object.entries({'scene-title':scene.title,'scene-desc':scene.desc,'scene-goal':scene.goal,'scene-role':scene.role}))document.getElementById(id).textContent=value;document.getElementById('scene-points').replaceChildren(...scene.points.map(text=>{const span=document.createElement('span');span.textContent=text;return span}))}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectScene(tab));tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight'||event.key==='ArrowDown')target=tabs[(index+1)%tabs.length];if(event.key==='ArrowLeft'||event.key==='ArrowUp')target=tabs[(index-1+tabs.length)%tabs.length];if(event.key==='Home')target=tabs[0];if(event.key==='End')target=tabs.at(-1);if(target){event.preventDefault();selectScene(target);target.focus()}})});
document.getElementById('year').textContent=new Date().getFullYear();
