import './404.css';
import { Outlet, Link } from "react-router-dom";
function Error404() {
    function change_page_active(link) {

        let remove_sidebar_link_list = Array.from(document.querySelectorAll('.list-group-item'));
        for (let element of remove_sidebar_link_list) {
            element.classList.remove('active');
        }

        var sidebar_link = document.querySelector('.' + link);
        var sidebar_link_child = sidebar_link.querySelector('.list-group-item');
        sidebar_link_child.classList.add('active');
    }
    return (
        <div className="Error404">
            404
            <br />
            <h5>
                Uh oh! Looks like you got lost.
                <br />
                <Link onClick={() => change_page_active('dashboard-link')} to="/">
                    Go back to the homepage!
                </Link>
            </h5>
        </div>
    );
}

export default Error404;
