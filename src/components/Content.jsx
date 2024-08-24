import styles from "./Content.module.css"

function Content({ number }) {
  return (
    <div className={styles.container}>
        <h1>{`Content ${number}`}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas eius deleniti ex officiis dolorem nam enim in,
            corrupti sapiente quisquam esse magnam facere voluptatibus, unde non eum, accusantium repellendus ipsam labore neque
            minima sed. Corporis, sapiente! Molestiae illo dicta ea ipsa nam eligendi eum placeat, ullam quibusdam. Rerum, nisi?
        </p>
    </div>
  )
}

export default Content