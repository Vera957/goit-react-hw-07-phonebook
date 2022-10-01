import { StyledInputTwo } from "style/style";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/store";

export const Field2 = () => {
    const dispatch = useDispatch();

    return (<>
        <h2>Search by name</h2>
        <form>
            <StyledInputTwo
                type="text"
                placeholder="Search"
                name="filter"
                id='searchName'
                onChange={(e) => dispatch(setFilter(e.target.value.toLocaleLowerCase()))}
            />
        </form>
    </>)

}