/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import CardImage from '../components/MenuComponents/Card/CardImage.vue'
import dish from '../assets/images/dish.png'

storiesOf('CardImage', module)
  .add('default', () => ({
    components: { CardImage },
    template: `
    <card-image :imgName="dish" />
  `,
    data: () => ({
      dish: dish
    })
  }))