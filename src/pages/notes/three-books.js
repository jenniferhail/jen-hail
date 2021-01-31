import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Note() {
  return (
    <React.Fragment>
      <Header headerText="Jen Hail" />
      <main className="main single-post">
        <section className="layout article">
          <article id="note-3" className="wrapper">
            <div className="row">
              <div className="content">
                <h2 className="h3 title">
                  Three Books Every Business Owner Should Read
                </h2>

                <div className="meta">
                  <span className="category">Business</span>
                  <span className="date">January 2018</span>
                </div>

                <p>
                  In my time as business owner, I’ve come across a few pivotal
                  books that I love and quickly recommend to everyone. The kind
                  of books that quake the earth around you and set you on a new
                  path.
                </p>
                <p>
                  I also want to encourage anyone considering a brand update to
                  make the investment holistic. Updating the look and feel of
                  your business can only go so far — which is why it’s also a
                  great idea to spend time improving your services and making
                  plans for your financial goals. Some ideas include tightening
                  any loose areas in your pricing, creating systems, or dropping
                  a service that costs more in time and money than it makes.
                </p>
                <p>
                  I highly suggest checking these books out from your local
                  library, or snagging your own copies to help you level up this
                  year. As you work through them, take notes and make a list of
                  tasks, so you can take action on what you learn.
                </p>
                <p>
                  <b>1. Profit First by Mike Michalowicz</b>
                  <br />
                  <a
                    href="http://amzn.to/2iSjIgY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Amazon
                  </a>
                  <br />
                  This book will give you the tools and confidence to manage
                  your business finances wisely. He flips the concept of revenue
                  – expenses = profit and creates a system for you to get in
                  your own way and only spend what you have allocated in your
                  expense account.
                </p>
                <p>
                  I now have both my personal and business bank accounts setup
                  with the Profit First method and it is a game changer. In just
                  a few seconds, I can log in to my account and see exactly how
                  much I have to pay myself, taxes, profit, and business
                  expenses. And I know exactly what to do with incoming
                  deposits. Read this one first.
                </p>
                <p>
                  <b>2. The Pumpkin Plan by Mike Michalowicz</b>
                  <br />
                  <a
                    href="http://amzn.to/2kZWAkY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Amazon
                  </a>
                  <br />
                  Book number two on my list is also written by Mike
                  Michalowicz. He has been at rock bottom and managed to turn it
                  all around to create multiple million dollar businesses, so
                  it’s safe to say his advice is sound. This book will inspire
                  you to specialize and focus your business, instead of working
                  with a large audience and offering many different services. He
                  uses the analogy of growing a massive, prize-winning pumpkin,
                  hence the name of the book. Definitely a great one to read as
                  you invest in branding and strive to separate yourself from
                  the crowd.
                </p>
                <p>
                  <b>3. The 80/20 Principle by Richard Koch</b>
                  <br />
                  <a
                    href="http://amzn.to/2nPXYI7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Amazon
                  </a>
                  <br />
                  The last book is one that I’m still reading, but it’s a really
                  cool idea. Richard presents the concept (backed by a ton of
                  evidence and research) that 20 percent of products sold
                  typically generate 80 percent of a business’ income. Or this
                  can be 20 percent of your time spent working will generate 80
                  percent of your income. The ratio is not always a clean 80/20,
                  but it is a great relationship to look for if you want to find
                  a ways to strengthen your business. I should warn you that
                  this is the most technical book of the three, so after the
                  intro, feel free to jump around to the sections that interest
                  you the most.
                </p>
                <p>
                  Have you read any of these, or do you recommend a great book
                  that isn't on this list? If so, please{" "}
                  <a
                    href="https://twitter.com/thejenhail"
                    target="_blank"
                    rel="noreferrer"
                  >
                    share your thoughts with me
                  </a>{" "}
                  on Twitter.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
