import Link from 'next/link'
import Image from 'next/image'
function article() {
    return (
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2FPower-Supply.jpg?alt=media&token=6075eb49-4b08-4035-a590-242187723b3f" alt="My alt" />
            <Image src="https://firebasestorage.googleapis.com/v0/b/repair-today-production-89a2a.appspot.com/o/product-image%2FPower-Supply.jpg?alt=media&token=6075eb49-4b08-4035-a590-242187723b3f" width={500} height={500} />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quibusdam.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus rem rerum aspernatur neque voluptates deserunt placeat ipsum molestiae, culpa nemo natus consequuntur alias, recusandae optio quae dolorem minus? Ad nisi tenetur dolore quasi perspiciatis numquam quaerat enim quisquam porro temporibus, officia voluptatem, quae animi totam laboriosam voluptate vel. Iste nulla animi repellendus accusantium maxime itaque expedita, molestias mollitia qui consequuntur dolores quibusdam facere unde! Nostrum ea, iste iure deserunt, ducimus, vitae tempore beatae minus voluptas blanditiis dolore. Dolore a repellendus sequi ratione, corrupti mollitia quia cum nisi quidem harum in vel omnis ullam! Dolores vel quisquam sapiente perspiciatis reprehenderit aliquam, nesciunt suscipit consectetur necessitatibus deleniti ipsa assumenda soluta repudiandae esse, excepturi ad neque, similique est rem? Excepturi eaque dolore harum repellendus itaque animi debitis commodi similique corrupti! Minima, at recusandae optio incidunt illo quas vero animi praesentium sint iste reprehenderit laudantium magnam possimus nulla, officiis voluptatem dolore sed deleniti molestiae expedita eaque. Ipsa minima quasi in? Officiis totam ullam corporis ipsum est aspernatur accusantium soluta atque voluptatem non! Facere qui a quasi laborum at nulla quae vitae optio, expedita quas cumque officia, voluptates ex rem laboriosam non sequi id itaque tenetur. Recusandae, enim pariatur. Quidem nisi hic id corporis necessitatibus laboriosam, et neque sint, error nam alias quisquam fugit ab sed molestiae quasi saepe est provident blanditiis explicabo mollitia eaque sit unde in. In hic, nam beatae sequi, saepe consectetur necessitatibus exercitationem soluta aspernatur minus ipsum distinctio molestiae perferendis doloribus voluptas enim fugit delectus blanditiis quae natus sit voluptatum.</p>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolore architecto debitis commodi, sint sit sapiente laboriosam cum at dolorem fuga repellendus rerum reiciendis facilis explicabo nostrum voluptatibus necessitatibus? Commodi sapiente sit reprehenderit assumenda nam, vitae aperiam nemo illo aut ab dolore adipisci veritatis iusto veniam cum obcaecati ipsum enim tempora culpa id dolor necessitatibus sed? Magni neque voluptatibus voluptatem ipsam non nulla, rerum eligendi amet cupiditate. Ipsum commodi fuga possimus aut! Quibusdam ipsum facere explicabo nulla nostrum recusandae quas.</h2>
            <Link href="/"><a>Home</a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/contact"><a>contact</a></Link>
        </div>
    )
}

export default article
