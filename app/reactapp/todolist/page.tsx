
import { Metadata } from 'next';
import App from './app'

export default function Page() {
    return (
        <App/>
    )
}


export const metadata: Metadata = {
    title: 'todo list'
  };