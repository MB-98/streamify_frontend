export function hasCloudFrontCookies(): boolean {
  const cookies = document.cookie;
  return cookies.includes('CloudFront-Policy') &&
         cookies.includes('CloudFront-Key-Pair-Id') &&
         cookies.includes('CloudFront-Signature');
}
