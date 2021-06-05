import ApiTable from './public_api/table.mjs';

const withoutCompatPath = Object.entries(ApiTable).filter(([, value]) => !value.isForCompat);
export default Object.fromEntries(withoutCompatPath);
