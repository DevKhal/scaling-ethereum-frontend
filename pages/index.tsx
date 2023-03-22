import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">PrivateSwap</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly swap with privacy and confidence. Swap on the same chain or cross chains the choice is yours. Using cutting edge ERC-4337 to optimize swaps for gas efficiency and provide the privacy that everyone not only needs but deserves. </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Click Here to Begin</button>
          </div>
        </div>
      </div>
    </>
  )
}
