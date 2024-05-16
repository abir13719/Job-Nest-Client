import qna from "../../assets/qna.png";
const QandA = () => {
  return (
    <div className="py-1 md:py-10">
      <div className="h-full md:h-[560px] container mx-auto grid grid-cols-12 bg-base-200 rounded-none md:rounded-3xl overflow-hidden">
        <h1 className="col-span-12 text-center text-4xl font-bold my-5">
          Frequently Asked Questions
        </h1>

        {/* Image div */}
        <div className="col-span-12 md:col-span-5 p-3 md:p-6">
          <img className="w-full h-full object-contain object-top" src={qna} />
        </div>

        {/* Form div */}
        <div className="col-span-12 md:col-span-7 p-3 md:p-6">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I search for jobs on your website?
            </div>
            <div className="collapse-content">
              <p>
                You can search for jobs by entering keywords, location, job category, or company
                name in the search bar on the homepage. You can also use filters to narrow down your
                search results based on your preferences.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do I need to create an account to apply for jobs?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you need to create an account to apply for jobs on our website. Creating an
                account allows you to save job listings, track your applications, receive
                personalized recommendations, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I receive notifications about new job listings?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can opt to receive notifications about new job listings, application
                updates, and other relevant updates via email or push notifications. You can manage
                your notification preferences in your account settings.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I edit or update my resume on your platform?
            </div>
            <div className="collapse-content">
              <p>
                You can edit or update your resume in your account settings. Simply navigate to the
                Profile or Resume section, where you can upload a new resume file or make changes to
                your existing resume.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Are the job listings on your website updated regularly?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we strive to keep our job listings updated regularly to ensure that you have
                access to the latest job opportunities. We work closely with employers and
                recruiters to maintain a comprehensive and up-to-date database of job listings.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I save job listings for later viewing?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can save job listings that interest you for later viewing. Simply click on
                the Save button next to the job listing, and it will be added to your saved listings
                for easy access.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I apply for a job listed on your website?
            </div>
            <div className="collapse-content">
              <p>
                To apply for a job listed on our website, simply click on the Apply Now button or
                follow the application instructions provided in the job listing. You may be required
                to submit your resume, cover letter, and other relevant documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QandA;
