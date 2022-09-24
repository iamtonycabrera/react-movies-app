export default function Pagination(props) {

    const getPages = () => {
        const result = [];
        for (var i = 1; i < props.totalPages; i++) {
            result.push(
                <a onClick={props.onChange} 
                className={props.actualPage === i ? "active" : ''} 
                href="#">
                    {i}
                </a>
            );
        }
        return result;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.actualPage} of {props.totalPages}:</span>

                {getPages()}

            </div>
        </div>
    )
}