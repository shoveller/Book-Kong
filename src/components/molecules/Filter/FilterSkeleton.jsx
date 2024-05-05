import FilterIcon from '../../atoms/FilterIcon/FilterIcon';

function FilterSkeleton() {
  return (
    <div className="flex py-4 gap-1">
      <FilterIcon title="전체" onClick={onClick} filter={filter} />
      <FilterIcon title="완독" onClick={onClick} filter={filter} />
      <FilterIcon title="독서중" onClick={onClick} filter={filter} />
      <FilterIcon title="희망 도서" onClick={onClick} filter={filter} />
    </div>
  );
}

export default FilterSkeleton;
