export function average(nums){const a=nums.filter(Number.isFinite);return a.length?a.reduce((s,n)=>s+n,0)/a.length:null}
export function stdev(nums){const a=nums.filter(Number.isFinite);if(a.length<2)return null;const m=average(a);return Math.sqrt(a.reduce((s,n)=>s+(n-m)**2,0)/(a.length-1))}
export function hitRate(nums,line){const a=nums.filter(Number.isFinite);return a.length?{hits:a.filter(n=>n>line).length,total:a.length,rate:a.filter(n=>n>line).length/a.length}:null}
export function projection(nums){const a=nums.filter(Number.isFinite);if(a.length<3)return null;const recent=a.slice(0,5);const mean=.65*average(recent)+.35*average(a);const sd=stdev(a)||0;return {mean,low:Math.max(0,mean-1.28*sd),high:mean+1.28*sd,n:a.length,sd}}
export function normalCdf(x){const sign=x<0?-1:1;const z=Math.abs(x)/Math.sqrt(2);const t=1/(1+0.3275911*z);const erf=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-z*z);return .5*(1+sign*erf)}
export function overProbability(p,line){return p&&p.sd>0?1-normalCdf((line+.5-p.mean)/p.sd):null}
export function metricValue(stat,metric){if(!stat)return null;const safe=x=>x===null||x===undefined||x===''?NaN:Number(x);const p=safe(stat.pts),r=safe(stat.reb),a=safe(stat.ast),t=safe(stat.three);if(metric==='PRA')return [p,r,a].every(Number.isFinite)?p+r+a:null;return {PTS:p,REB:r,AST:a,'3PM':t}[metric]??null}
