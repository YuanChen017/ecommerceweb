const Pagination = ({ postperpage, totoalposts, paginate }) => {
  const pagenumbers = [];
  for (let i = 1; i <= Math.ceil(totoalposts / postperpage); i++) {
    pagenumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pagenumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
