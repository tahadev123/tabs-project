import styles from "./Header.module.css"

function Header({ setTab, tab }) {
  const tabHandler = (numberTab) => {
    setTab(numberTab)
  }

  return (
    <div className={styles.container}>
        <h1>Tabs Component with React</h1>
        <div>
            <button className={tab === 1 ? styles.active : null} onClick={() => tabHandler(1)}>TAB 1</button>
            <button className={tab === 2 ? styles.active : null} onClick={() => tabHandler(2)}>TAB 2</button>
            <button className={tab === 3 ? styles.active : null} onClick={() => tabHandler(3)}>TAB 3</button>
            <button className={tab === 4 ? styles.active : null} onClick={() => tabHandler(4)}>TAB 4</button>
        </div>
    </div>
  )
}

export default Header