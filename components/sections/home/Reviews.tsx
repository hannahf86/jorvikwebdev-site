/* ===== COMPONENT: Reviews (home) — port of index.html <section id="reviews" class="sec-reviews"> ===== */

export function Reviews() {
  return (
    <section id="reviews" className="sec-reviews">
      <div className="wrap">
        <div className="eyebrow">Don&#x27;t just take our word for it</div>
        <h2 className="sec-title">Kind words from <span className="hl-green">kind people</span></h2>
        <div className="reviews-badge"><span className="badge-stars">★★★★★</span> 5.0 on Google</div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">&quot;Hannah is so lovely to work with and really knows what she is talking about. She goes above and beyond with what you ask of her and I have definitely seen an improvement since her services.&quot;</p>
            <div className="review-meta">
              <div className="review-avatar-g">E</div>
              <div>
                <div className="review-name">Emily</div>
                <div className="review-src">Google review</div>
              </div>
            </div>
          </div>
          <div className="review-card-r">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">&quot;Hannah was so lovely to work with and really helped to improve our website. She is very knowledgeable and was very happy to help me learn a few things along the way. We have definitely seen an improvement with our response to the website. I will definitely be using Hannah again!&quot;</p>
            <div className="review-meta">
              <div className="review-avatar-t">S</div>
              <div>
                <div className="review-name">Simon</div>
                <div className="review-src">Google review</div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">&quot;Efficient, professional, friendly and all at a reasonable price. Hannah was very easy to work with and did exactly what was required.&quot;</p>
            <div className="review-meta">
              <div className="review-avatar-t">P</div>
              <div>
                <div className="review-name">Paul</div>
                <div className="review-src">Google review</div>
              </div>
            </div>
          </div>
          <div className="review-card-r">
            <div className="review-stars">★★★★★</div>
            <p className="review-quote">&quot;Thanks for help with my new website from start to finish. Hannah was really helpful and made the whole process really easy… would highly recommend.&quot;</p>
            <div className="review-meta">
              <div className="review-avatar-g">M</div>
              <div>
                <div className="review-name">Mike</div>
                <div className="review-src">Google review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
