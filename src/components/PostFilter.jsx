import MySelect from "../UI/select/MySelect.jsx";
import MyInput from "../UI/input/MyInput.jsx";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="">
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={sort => setFilter({...filter, sort})}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
            />
        </div>
    );
};

export default PostFilter;