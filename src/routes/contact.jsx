import { Helmet } from 'react-helmet';
import Breadcrumb from '../common/breadcrumb';
import ContactArea from '../components/contact/contact-area';
import { Helmet } from 'react-helmet';

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact Us | Ultimate Financial Solutions</title>
				<meta
					name='keywords'
					content='Ultimate, Financial, UFS, Finance, Business management'
				/>
				<meta
					name='description'
					content='Ultimate Financial Solutions is a comprehensive business management group consist of investment holding principal company'
				/>
			</Helmet>
			<main>
				<Breadcrumb title={'Contact Us'} subtitle={'Contact Us'} />
				<ContactArea />
			</main>
		</>
	);
};

export default Contact;
