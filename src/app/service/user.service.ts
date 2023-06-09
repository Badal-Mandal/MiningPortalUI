import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) { }


  login(data) {

    return this.http.post(this.url + "/admin/login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")

    })


  }

  createMember(data) {
    return this.http.post(this.url + "/admin/create-member", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  fetchMemberDetails() {
    // let token1 = localStorage.getItem('token');
    // let token = new HttpHeaders().set("Authorization","bearer"+token1)

    return this.http.get(this.url + "/admin/fetch-member", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }


  //  create Mining Partner 

  createMiningPartner(data) {
    return this.http.post(this.url + "/admin/create-mining-partner", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // Fetch Mining Partner 

  fetchMiningPartner() {
    return this.http.get(this.url + "/admin/create-mining-partner", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }
  //member login
  memberLogin(data) {
    return this.http.post(this.url + "/member/member-login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // Partner Login

  partnerLogin(data) {
    return this.http.post(this.url + "/mining/mining-partner-login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // Fetch Member Details

  fetchMemberPortalDetails(data) {
    return this.http.post(this.url + "/member/member-profile-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // fetch Mining Partner Profile details
  fetchMiningPartnerProfileDetails(data) {
    return this.http.post(this.url + "/mining/mining-partner-profile-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // Add Mining Partner  Bnak Details

  addMiningPartnerBankDetails(data) {
    return this.http.post(this.url + "/mining/partner-bank-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // Fetch Mining Partner Bank Details

  fetchMiningPartnerBankDetails(data) {
    return this.http.post(this.url + "/mining/fetch-partner-bank-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //Add member bank details
  addMemberBankDetails(data) {
    return this.http.post(this.url + "/member/member-bank-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //fetch member bank details
  fetchMemberBankDetails(data) {
    return this.http.post(this.url + "/member/fetch-member-bank-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //update member data
  updateMemberData(data) {
    return this.http.post(this.url + "/member/update-member-data", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //update partner data
  updatePartnerData(data) {
    return this.http.post(this.url + "/mining/update-partner-data", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  memberRefferalId(data) {
    return this.http.post(this.url + "/member/fetch-member-refferal-id", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  memberMyTeam(data) {
    return this.http.post(this.url + "/member/fetch-member-myteam-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  miningPartnerTeam(data) {
    return this.http.post(this.url + "/mining/fetch-partner-myteam-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  useRefferalIdOfMemberToFetchMiningPartner(data) {
    return this.http.post(this.url + "/mining/fetch-partner-myteam-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //fetch mining partner wallet
  fetchMiningPartnerWallet(data) {
    return this.http.post(this.url + "/mining/fetch-mining-partner-total-wallet", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //wallet update
  fetchMiningPartnerWalletAndUpdate(data) {
    return this.http.post(this.url + "/mining/fetch-partner-wallet-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //partner wallet daily data
  partnerWalletDailyData(data) {
    return this.http.post(this.url + "/mining/fetch-partner-wallet-daily-history", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //partner wallet shown in admin panel
  partnerWalletShownInAdminPanel() {
    return this.http.get(this.url + "/admin/fetch-all-partner-total-wallet-amount-from-admin", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //Total liquidity of partner api call
  totalLiquidityOfPartner() {
    return this.http.get(this.url + "/admin/fetch-sum-of-all-partner-liquidity", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //Active partner listing on admin panel
  activePartnerApi() {
    return this.http.get(this.url + "/admin/fetch-all-active-partner-only", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //send withdrawal request by partner and accept by admin
  fetchWithdrawalRequestByAdmin() {
    return this.http.get(this.url + "/admin/fetch-partner-withdrawal-request-to-admin", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //Approved withdrawal history
  approvedWithdrawalHistory(data) {
    return this.http.post(this.url + "/admin/partner-withdrawal-history-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //final approved withdrawal partner list
  finalApprovedWithdrawalList() {
    return this.http.get(this.url + "/admin/fetch-partner-approve-withdrawal-history", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //partner success withdrawal history
  partnerWithdrawalSuccessHistroy(data) {
    return this.http.post(this.url + "/mining/fetch-partner-approve-withdrawal-history-for-partner", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //partner total withdrawal 
  partnerTotalWithdrawalHistory(data) {
    return this.http.post(this.url + "/mining/fetch-sum-of-partner-all-withdrawal", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  //Each day member wallet deposite
  memberWalletDepositeEachDay(data) {
    return this.http.post(this.url + "/member/fetch-member-wallet-daily-history", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  //fetch member wallet of a month in admin section
  fetchMemberWalletOfMonth() {
    return this.http.get(this.url + "/admin/fetch-sum-of-member-wallet-for-month-for-admin", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //member total wallet of each month
  memberTotalWalletOfAMonth(data) {
    return this.http.post(this.url + "/member/fetch-sum-of-member-wallet-of-month", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }
  //member withdrawal request

  memberWithdrawalRequest() {
    return this.http.get(this.url + "/admin/fetch-member-withdrawal-request-to-admin", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //member can see thier approved withdrawal 

  memberWithdrawalApproved(data) {
    return this.http.post(this.url + "/member/fetch-member-approve-withdrawal-history-for-member", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  // admin will approved member request
  adminWillApprovedMemberRequest(data) {
    return this.http.post(this.url + "/admin/member-withdrawal-history-details", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //approved member withdrawal
  approvedMemberWithdrawalAmount() {
    return this.http.get(this.url + "/admin/fetch-member-approve-withdrawal-history-for-admin", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //memer total withdrawal history display in member dashboard

  memberTotalWithdrawaHistoty(data) {
    return this.http.post(this.url + "/member/fetch-sum-of-member-total-withdrawal-for-member", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  //partner withdrawal request in partner portal
  parterWithdrawalRequestFromPartnerPortal(data) {
    return this.http.post(this.url + "/mining/fetch-partner-withdrawal-request-for-partner", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  //member withdrawal request in membr portal
  memberWithdrawalRequstInMemberPortal(data) {
    return this.http.post(this.url + "/member/fetch-member-withdrawal-request", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })


  }

  fetchMemberDetailsForAdminSingleData(data) {
    return this.http.post(this.url + "/admin/fetch-member-profile-details-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  updateMemberDetailsFromAdmin(data) {
    return this.http.post(this.url + "/admin/update-member-profile-details-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  fetchPartnerDetailsForAdminUsingPartnerId(data) {
    return this.http.post(this.url + "/admin/fetch-mining-partner-profile-details-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  updatePartnerDetailsFromAdmin(data) {
    return this.http.post(this.url + "/admin/update-mining-partner-profile-details-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //member Sign up
  signUpMember(data) {
    return this.http.post(this.url + "/signup/member-signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //signUp partner
  signUpPartner(data) {
    return this.http.post(this.url + "/signup/partner-signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })

  }

  // pendingPayemntPartner
  pendingPayemntPartnerList() {
    return this.http.post(this.url + "/admin/fetch-All-Pending-Partner-Only", {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  sendOtpForMemberForgetPassword(data) {
    return this.http.post(this.url + "/member/forget-password-member", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  verifyOtpForMember(data) {
    return this.http.post(this.url + "/member/veryfiy-otp-member", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  memberResetPasswordSave(data) {
    return this.http.post(this.url + "/member/member-regenerate-password", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  sendOtpForPartnerForgetPassword(data) {
    return this.http.post(this.url + "/mining/partner-forget-password", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  verifyOtpForPartner(data) {
    return this.http.post(this.url + "/mining/verify-otp-partner", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  partnerResetPasswordSave(data) {
    return this.http.post(this.url + "/mining/partner-Regenerate-Password", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // ispartner-active-manual-from-admin
  isPartnerActiveManualFromAdmin(data) {
    return this.http.post(this.url + "/admin/ispartner-active-manual-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  // doactivate-partner-manual-from-admin
  doactivatePartnerManualFromAdmin(data) {
    return this.http.post(this.url + "/admin/doactivate-partner-manual-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //partner wallet daily data in admin
  partnerWalletDailyDataInAdmin(data) {
    return this.http.post(this.url + "/mining/fetch-partner-wallet-daily-history", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //perticular partner withdrawal request for admin
  perticularPartnerWithdrawalRequest(data) {
    return this.http.post(this.url + "/admin/particular-partner-withdrawal-request-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //widthdrawal history for perticular partner in to admin
  perticularPartnerWithdrawalHistory(data) {
    return this.http.post(this.url + "/admin/particular-partner-approved-withdrawal-history-from-admin", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  ///admin/perday-amount-transfer-to-partner-manaul
  partnerPerDayAmountPaymentManually(data) {
    return this.http.post(this.url + "/admin/perday-amount-transfer-to-partner-manaul", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  //last approve date
  partnerLastApproveDate(data) {
    return this.http.post(this.url + "/admin/fetch-last-payment-date", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

}
