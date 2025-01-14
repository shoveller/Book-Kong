import { number, string } from 'prop-types';
import BookTitle from '../../atoms/BookTitle/BookTitle';
import { memo } from 'react';

const getPageClassNames = (page) => {
  // 공통 클래스 이름
  const commonClassNames =
    'bookTree-list w-[230px] border rounded-sm border-grayscale-white display flex justify-center items-center';
  const pageMap = {
    page: `h-[${Math.max(page * 0.1, 24)}px]`,
  };

  return `${commonClassNames} ${pageMap[page]}`;
};

const getClassNames = ({ page, index }) => {
  // 병합할 클래스 이름 (공통 클래스 이름 + 페이지 맵의 클래스 이름)
  // 조건 처리
  // 케이스 별 클래스 이름 병합
  if (index % 3 === 0) {
    return [
      getPageClassNames(page),
      'ml-[-24px] bg-primary-500 text-white',
    ].join(' ');
  }

  if (index % 3 === 1) {
    return [
      getPageClassNames(page),
      'ml-6 bg-badge-yellow text-primary-500',
    ].join(' ');
  }

  if (index % 3 === 2) {
    return [
      getPageClassNames(page),
      'bg-badge-yellow-02 text-grayscale-900',
    ].join(' ');
  }
};

// 페이지 별 키(key)에 설정할 높이를 아래처럼 작성합니다.
const BookBlock = memo(function BookBlock({ title, page, index }) {
  // 마크업 반환 (병합된 클래스 이름 설정)
  return (
    <li
      className={getClassNames({ page, index })}
      style={{ height: `${Math.max(page * 0.1, 24)}px` }}
    >
      <BookTitle>{title}</BookTitle>
    </li>
  );
});

BookBlock.propTypes = {
  title: string,
  page: number,
  index: number,
};

export default BookBlock;
