const ROUTES = {
	SIGN_UP: '/signup',
	LOGIN: '/login',
	SERVICE_METRICS: '/application/:servicename',
	SERVICE_MAP: '/service-map',
	TRACE: '/trace',
	TRACE_DETAIL: '/trace/:id',
	SETTINGS: '/settings',
	INSTRUMENTATION: '/add-instrumentation',
	USAGE_EXPLORER: '/usage-explorer',
	APPLICATION: '/application',
	ALL_DASHBOARD: '/dashboard',
	DASHBOARD: '/dashboard/:dashboardId',
	DASHBOARD_WIDGET: '/dashboard/:dashboardId/:widgetId',
	EDIT_ALERTS: '/alerts/edit/:ruleId',
	LIST_ALL_ALERT: '/alerts',
	ALERTS_NEW: '/alerts/new',
	ALL_CHANNELS: '/settings/channels',
	CHANNELS_NEW: '/setting/channels/new',
	CHANNELS_EDIT: '/setting/channels/edit/:id',
	ALL_ERROR: '/errors',
	ERROR_DETAIL: '/error-detail',
	VERSION: '/status',
	MY_SETTINGS: '/my-settings',
	ORG_SETTINGS: '/settings/org-settings',
	SOMETHING_WENT_WRONG: '/something-went-wrong',
	UN_AUTHORIZED: '/un-authorized',
	NOT_FOUND: '/not-found',
	HOME_PAGE: '/',
	PASSWORD_RESET: '/password-reset',
};

export default ROUTES;
