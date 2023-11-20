# AI

[jotai-ai](https://github.com/himself65/jotai-ai) is a utility package compatible
with [Vercel AI SDK](https://sdk.vercel.ai/docs).

## install

```
yarn add jotai-ai
```

## chatAtoms

`chatAtoms` is a collection of atoms for a chatbot like [`useChat`](https://sdk.vercel.ai/docs/api-reference/use-chat).

```js
import { useAtomValue, useAtom, useSetAtom } from 'jotai'
import { chatAtoms } from 'jotai-ai'

const {
  messagesAtom,
  inputAtom,
  submitAtom,
  isLoadingAtom,
} = chatAtoms()

function Messages () {
  const messages = useAtomValue(messagesAtom)
  return (
    <>
      {messages.length > 0
        ? messages.map(m => (
          <div key={m.id} className='whitespace-pre-wrap'>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))
        : null}
    </>
  )
}

function ChatInput () {
  const [input, handleInputChange] = useAtom(inputAtom)
  const handleSubmit = useSetAtom(submitAtom)
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        placeholder='Say something...'
        onChange={handleInputChange}
      />
    </form>
  )
}

function App () {
  const isLoading = useAtomValue(isLoadingAtom)
  return (
    <main>
      <Messages/>
      <ChatInput/>
      {isLoading ? <div>Loading...</div> : null}
    </main>
  )
}
```

### Comparison with `useChat`

`useChat` is a hook provided by Vercel AI SDK, which is a wrapper of `swr` in React, `swrv` in Vue, and `sswr` in
Svelte.
They actually have the different behaviors in the different frameworks.

`chatAtoms` provider a more flexible way to create the chatbot, which is based on `jotai` atoms, so you can use it in
framework-agnostic way.

Also, `chatAtoms` is created out of the Component lifecycle,
so you can share the state between different components easily.

Even you are using `useChat` in React, its requirements React 18.0.0+.

## LICENSE

[MIT](LICENSE)

[Vercel AI SDK]: https://sdk.vercel.ai/docs
