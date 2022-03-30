import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Book } from '.'

export default {
  title: 'Book',
  component: Book,
} as ComponentMeta<typeof Book>

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Book> = (args) => <Book {...args} />

export const Default = Template.bind({})

Default.args = {
  book: {
    id: '8f41b92c7460b9337660427e',
    title: 'A Culpa é das Estrelas',
    description:
      'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
    authors: ['Jonh Green'],
    pageCount: 288,
    category: 'Romance',
    imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg',
    isbn10: '0062856626',
    isbn13: '978-0062856623',
    language: 'Inglês',
    publisher: 'Intrínseca',
    published: 2002,
  },
}
