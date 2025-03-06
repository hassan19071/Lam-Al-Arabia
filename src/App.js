import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import HomeAr from "./pages/HomeAr";
import AboutAr from "./pages/AboutAr";
import ServicesPageAr from "./pages/ServicesAr";
import ContactPageAr from "./pages/ContactPageAr";
import AccountingABookkeepingAr from "./pages/Accounting&BookingAr";
import ZakkatATaxAr from "./pages/Zakat&TaxAr";
import FinancialConsultingAr from "./pages/FinancialConsultingAr";
import CertificateAr from "./pages/CertificateAr";
import Financing from "./pages/Financing";
import CompanyFormation from "./pages/CompanyFormation";
import FeasibilityStudy from "./pages/FeasibilityStudy";
import CompanyFormationAr from "./pages/CompanyFormationAr";
import FeasibilityStudyAr from "./pages/FeasibilityStudyAr";
import FinancingAr from "./pages/FinancingAr";
import AccountsSystemsStructuring from "./pages/Accounts&SystemsStructuring";
import AccountsSystemsStructuringAr from "./pages/Accounts&SystemsStructuringAr";

// Lazy load your components
const HomeEn = lazy(() => import("./pages/HomeEn"));
const AboutEn = lazy(() => import("./pages/AboutEn"));
const ServicesEn = lazy(() => import("./pages/ServicesEn"));
const ContactEn = lazy(() => import("./pages/ContactEn"));
const AccountingABookkeeping = lazy(() =>
  import("./pages/Accounting&Bookkeeping")
);
const ZakkatATax = lazy(() => import("./pages/Zakkat&Tax"));
const FinancialConsulting = lazy(() => import("./pages/FinancialConsulting"));
const Certificate = lazy(() => import("./pages/Certificate"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<HomeEn />} />
          <Route path="/en" element={<HomeEn />} />
          <Route path="/ar" element={<HomeAr />} />
          <Route path="/about-us" element={<AboutEn />} />
          <Route path="ar/من-نحن" element={<AboutAr />} />
          <Route path="/services" element={<ServicesEn />} />
          <Route path="ar/خدماتنا" element={<ServicesPageAr />} />
          <Route
            path="/services/accounting-and-bookkeeping-services"
            element={<AccountingABookkeeping />}
          />
          <Route
            path="/ar/خدماتنا/accounting-and-bookkeeping-services"
            element={<AccountingABookkeepingAr />}
          />
          <Route
            path="/services/zakkat-and-tax-services"
            element={<ZakkatATax />}
          />
          <Route
            path="/ar/خدماتنا/zakkat-and-tax-services"
            element={<ZakkatATaxAr />}
          />
          <Route
            path="/services/financial-consulting"
            element={<FinancialConsulting />}
          />
          <Route
            path="/ar/خدماتنا/financial-consulting"
            element={<FinancialConsultingAr />}
          />
          <Route
            path="/services/contractor-classification-certificate-issuance"
            element={<Certificate />}
          />
          <Route
            path="/ar/خدماتنا/contractor-classification-certificate-issuance"
            element={<CertificateAr />}
          />
          <Route path="/services/financing-services/" element={<Financing />} />
          <Route
            path="/ar/خدماتنا/financing-services/"
            element={<FinancingAr />}
          />
          <Route
            path="/services/company-formation-services/"
            element={<CompanyFormation />}
          />
          <Route
            path="/ar/خدماتنا/company-formation-services/"
            element={<CompanyFormationAr />}
          />
          <Route
            path="/services/feasibility-studies-services/"
            element={<FeasibilityStudy />}
          />
          <Route
            path="/ar/خدماتنا/feasibility-studies-services/"
            element={<FeasibilityStudyAr />}
          />
          <Route
            path="/services/accounts-systems-structuring/"
            element={<AccountsSystemsStructuring />}
          />
          <Route
            path="/ar/خدماتنا/accounts-systems-structuring/"
            element={<AccountsSystemsStructuringAr />}
          />
          <Route path="/contact-us" element={<ContactEn />} />
          <Route path="/ar/تواصل-معنا" element={<ContactPageAr />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
