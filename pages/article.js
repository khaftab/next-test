import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from './test.module.css'
function article() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', function (event) {
            // not show the default browser install app prompt
            event.preventDefault();

            setHidden(false)

            // save the event to use it later
            // (it has the important prompt method and userChoice property)
            window.promptEvent = event;
        });
    }, [])
    const handleClick = () => {
        // show the install app prompt
        window.promptEvent.prompt();

        // handle the Decline/Accept choice of the user
        window.promptEvent.userChoice.then(function (choiceResult) {
            // hide the prompt banner here
            // …
            setHidden(true)

            if (choiceResult.outcome === 'accepted') {
                console.info('mm User accepted the A2HS prompt');
            } else {
                console.info('mm User dismissed the A2HS prompt');
            }

            window.promptEvent = null;
        })
    }

    return (
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2FPower-Supply.jpg?alt=media&token=6075eb49-4b08-4035-a590-242187723b3f" alt="My alt" />
            <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2FPower-Supply.jpg?alt=media&token=6075eb49-4b08-4035-a590-242187723b3f" width={500} height={500} />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque volsa assumenda soluta repudiandae esse, excepturi ad neque, similique est rem? Excepturi eaque dolore harum repellendus itaque animi debitis commodi similique c possimus aut! Quibusdam ipsum facere explicabo nulla nostrum recusandae quas.</p>
            <Link href="/"><a>Home</a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/contact"><a>contact</a></Link>
            <button className={`${hidden && styled.hidden}`} onClick={handleClick}></button>
        </div>
    )
}

export default article
