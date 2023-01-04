// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemList, onChangeTabId, isActive} = props
  const {displayText, tabId} = tabItemList
  const appliyngStyleOnBtn = isActive ? 'active-btn' : ''

  const onClickTabItem = () => {
    onChangeTabId(tabId)
  }
  return (
    <li className="list-items-container">
      <button className="tab-btn" type="button" onClick={onClickTabItem}>
        <p className={`tab-item-para ${appliyngStyleOnBtn}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
