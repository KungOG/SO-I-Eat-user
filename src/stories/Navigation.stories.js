/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import Navigation from '../components/Navigation.vue'

import EatHere from '../assets/icons/EatHere.svg'
import TakeAway from '../assets/icons/TakeAway.svg'
import Clock from '../assets/icons/Clock.svg'

const icons = [ { icon: EatHere }, { icon: TakeAway }, { icon: Clock } ]


storiesOf('Navigation', module)
  .add('default', () => ({
      components: { Navigation },
      template: '<navigation :icons="icons" v-model="selected"/>',
    data() {
        return {
            selected: null,
            icons: icons
        }
      },
  }))

