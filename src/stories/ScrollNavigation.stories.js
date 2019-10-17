/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import ScrollNavigation from '../components/MenuComponents/ScrollNavigation.vue'


storiesOf('ScrollNavigation', module)
  .add('default', () => ({
      components: { ScrollNavigation },
      template: '<scroll-navigation :categories="categories" v-model="selected"/>',
    data() {
        return {
            selected: null,
            categories: ['förrätter', 'soppor', 'varmrätter', 'dessert', 'nudlar', 'barnrätter', 'dryck', 'lunch']
        }
      },
  }))