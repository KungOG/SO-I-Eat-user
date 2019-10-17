/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import MenuCard from '../components/MenuComponents/MenuCard.vue'

storiesOf('MenuCard', module)
  .add('default', () => ({
    components: { MenuCard },
    template: `
    <menu-card :img="" :text=""/>
  `,
    data: () => ({
      
    })
  }))