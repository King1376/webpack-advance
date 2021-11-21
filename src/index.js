import './styles/base.css';
import { esm } from './module/detail';
const path = 'list'
const commonjs = require(`./module/${path}`)
esm.log()
commonjs.log()
// console.log(esm, 'esm', esm.log());
// console.log(commonjs, 'commonjs', commonjs.log());