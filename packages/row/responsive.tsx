
// 响应式小尺寸，<= 575 以下的尺寸
const EXTRA_SMALL = 'xs';
const EXTRA_SMALL_SIZE = 575;

const SMALL = 'sm';
const SMALL_SIZE = 576;

const MIDDLE = 'md';
const MIDDLE_SIZE = 768;

const LARGE = 'lg';
const LARGE_SIZE = 992;

const EXTRA_LARGE = 'xl';
const EXTRA_LARGE_SIZE = 1200;

const EXTRA_EXTRA_LARGE = 'xxl';
const EXTRA_EXTRA_LARGE_SIZE = 1600;

/**
 * 响应式尺寸
 */
export const responsiveSizes = [
  EXTRA_SMALL,
  SMALL,
  MIDDLE,
  LARGE,
  EXTRA_LARGE,
  EXTRA_EXTRA_LARGE
] as const;

/**
 * 响应式尺寸查询边界
 */
export const responsiveQueryboundary: BoundaryMap = {
  [EXTRA_SMALL]: `(max-width:${EXTRA_SMALL_SIZE}px)`,
  [SMALL]: `(min-width:${SMALL_SIZE}px)`,
  [MIDDLE]: `(min-width:${MIDDLE_SIZE}px)`,
  [LARGE]: `(min-width:${LARGE_SIZE}px)`,
  [EXTRA_LARGE]: `(min-width:${EXTRA_LARGE_SIZE}px)`,
  [EXTRA_EXTRA_LARGE]: `(min-width:${EXTRA_EXTRA_LARGE_SIZE}px)`,
} as const
