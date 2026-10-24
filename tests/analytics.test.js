import test from 'node:test';import assert from 'node:assert/strict';import {average,hitRate,projection,overProbability,metricValue} from '../src/analytics.js';
test('averages and missing data',()=>{assert.equal(average([2,4]),3);assert.equal(average([]),null)});
test('strict over hit rate',()=>{assert.deepEqual(hitRate([20,21,22],21),{hits:1,total:3,rate:1/3})});
test('projection requires adequate samples',()=>{assert.equal(projection([1,2]),null);assert.ok(projection([20,22,24]).mean>0)});
test('probability bounded',()=>{const p=overProbability(projection([18,22,25,21,30]),22.5);assert.ok(p>=0&&p<=1)});
test('PRA sums only valid values',()=>{assert.equal(metricValue({pts:20,reb:8,ast:6},'PRA'),34);assert.equal(metricValue({pts:20,reb:null,ast:6},'PRA'),null)});
