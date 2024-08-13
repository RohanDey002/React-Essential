export default function TabButton({ isSelect, children, onSelect }) {
    return (
        <li>
            <button className={isSelect ? 'active' : undefined} onClick={onSelect}>
            {children}</button>
        </li>
    )
}