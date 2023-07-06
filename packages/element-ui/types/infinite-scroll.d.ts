import { VNodeDirective } from 'vue2'

export interface ElInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}