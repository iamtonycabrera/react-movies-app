export default function Pagination(props) {

    const getPages = () => {
        const result = [];
        for (let i = 1; i <= props.totalPages; i++) {
            result.push(
                <a onClick={()=> props.onChange(i)} 
                className={props.somePage === i ? "active" : ''}>
                    {i}
                </a>
            );
        }
        return result;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.somePage} of {props.totalPages}:</span>

                {getPages()}

            </div>
        </div>
    )
}