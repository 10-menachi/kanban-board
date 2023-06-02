import commentsCounter from './src/modules/commentsCounter.js';

describe('commentsCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <div class="comment">Comment 1</div>
        <div class="comment">Comment 2</div>
        <div class="comment">Comment 3</div>
      </div>
    `;
  });

  afterEach(() => {
    // Clean up the DOM after each test
    document.body.innerHTML = '';
  });

  it('returns the correct number of comments', () => {
    const count = commentsCounter();
    expect(count).toBe(3);
  });

  it('returns 0 when no comments are present', () => {
    document.body.innerHTML = '';
    const count = commentsCounter();
    expect(count).toBe(0);
  });
});
