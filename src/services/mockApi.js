import axios from 'axios';

// Mock Data Storage
const mockData = {
  products: [
    { 
      id: 1, 
      name: 'ASICS DS LIGHT X-FLY PRO 2 PARIS', 
      description: 'The DS LIGHT X-FLY™ PRO 2 PARIS cleat for soccer players', 
      brand: 'Asics', 
      price: 7500, 
      color: 'Yellow', 
      image: 'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/s/asics_ds_light_x-fly_pro_2_paris_1101a074.750__01.jpg', 
      category: 'speed', 
      amount: 15,
      images: [
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/s/asics_ds_light_x-fly_pro_2_paris_1101a074.750__01.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/s/asics_ds_light_x-fly_pro_2_paris_1101a074.750__02.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/s/asics_ds_light_x-fly_pro_2_paris_1101a074.750__03.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/s/asics_ds_light_x-fly_pro_2_paris_1101a074.750__04.jpg'
      ],
      sizes: [
        { type_size: 'EUR', size: '40.5' },
        { type_size: 'EUR', size: '41.5' },
        { type_size: 'EUR', size: '42' },
        { type_size: 'EUR', size: '42.5' },
        { type_size: 'EUR', size: '43.5' },
        { type_size: 'EUR', size: '44' },
        { type_size: 'EUR', size: '45' },
        { type_size: 'US', size: '7.5' },
        { type_size: 'US', size: '8' },
        { type_size: 'US', size: '8.5' },
        { type_size: 'US', size: '9' },
        { type_size: 'US', size: '9.5' }
      ]
    },
    { 
      id: 2, 
      name: 'PUMA FUTURE 7 ULTIMATE VOLUME', 
      description: 'Bold and brilliant takes on the latest ULTRA 5', 
      brand: 'Puma', 
      price: 8000, 
      color: 'White', 
      image: 'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/f/u/future_7_ultimate_vol._up_fg_ag_10807201__01.jpg', 
      category: 'control', 
      amount: 15,
      images: [
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/f/u/future_7_ultimate_vol._up_fg_ag_10807201__01.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/f/u/future_7_ultimate_vol._up_fg_ag_10807201__02.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/f/u/future_7_ultimate_vol._up_fg_ag_10807201__03.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/f/u/future_7_ultimate_vol._up_fg_ag_10807201__04.jpg'
      ],
      sizes: [
        { type_size: 'EUR', size: '40.5' },
        { type_size: 'EUR', size: '41.5' },
        { type_size: 'EUR', size: '42' },
        { type_size: 'EUR', size: '42.5' },
        { type_size: 'EUR', size: '43.5' },
        { type_size: 'EUR', size: '44' },
        { type_size: 'EUR', size: '45' },
        { type_size: 'US', size: '7.5' },
        { type_size: 'US', size: '8' },
        { type_size: 'US', size: '8.5' },
        { type_size: 'US', size: '9' },
        { type_size: 'US', size: '9.5' }
      ]
    },
    { 
      id: 3, 
      name: 'MIZUNO MORELIA II PRO AG VIETNAMP', 
      description: 'Boot specially made for artificial grass use', 
      brand: 'Mizuno', 
      price: 4500, 
      color: 'Black', 
      image: 'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/m/i/mizuno_morelia_ii_pro_ag_-_black_galaxy_silver_dark_shadow_p1ga241403__01.jpg', 
      category: 'touch', 
      amount: 15,
      images: [
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/m/i/mizuno_morelia_ii_pro_ag_-_black_galaxy_silver_dark_shadow_p1ga241403__01.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/m/i/mizuno_morelia_ii_pro_ag_-_black_galaxy_silver_dark_shadow_p1ga241403__02.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/m/i/mizuno_morelia_ii_pro_ag_-_black_galaxy_silver_dark_shadow_p1ga241403__03.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/m/i/mizuno_morelia_ii_pro_ag_-_black_galaxy_silver_dark_shadow_p1ga241403__04.jpg'
      ],
      sizes: [
        { type_size: 'EUR', size: '40.5' },
        { type_size: 'EUR', size: '41.5' },
        { type_size: 'EUR', size: '42' },
        { type_size: 'EUR', size: '42.5' },
        { type_size: 'EUR', size: '43.5' },
        { type_size: 'EUR', size: '44' },
        { type_size: 'EUR', size: '45' },
        { type_size: 'US', size: '7.5' },
        { type_size: 'US', size: '8' },
        { type_size: 'US', size: '8.5' },
        { type_size: 'US', size: '9' },
        { type_size: 'US', size: '9.5' }
      ]
    },
    { 
      id: 4, 
      name: 'ADIDAS F50 + FG - TURBO/AURORA', 
      description: 'ปลดปล่อยความไวไปกับ adidas F50', 
      brand: 'Adidas', 
      price: 10500, 
      color: 'Red', 
      image: 'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/d/adidas_f50_fg_if1275__01.jpg', 
      category: 'touch', 
      amount: 15,
      images: [
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/d/adidas_f50_fg_if1275__01.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/d/adidas_f50_fg_if1275__02.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/d/adidas_f50_fg_if1275__03.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/a/d/adidas_f50_fg_if1275__04.jpg'
      ],
      sizes: [
        { type_size: 'EUR', size: '40.5' },
        { type_size: 'EUR', size: '41.5' },
        { type_size: 'EUR', size: '42' },
        { type_size: 'EUR', size: '42.5' },
        { type_size: 'EUR', size: '43.5' },
        { type_size: 'EUR', size: '44' },
        { type_size: 'EUR', size: '45' },
        { type_size: 'US', size: '7.5' },
        { type_size: 'US', size: '8' },
        { type_size: 'US', size: '8.5' },
        { type_size: 'US', size: '9' },
        { type_size: 'US', size: '9.5' }
      ]
    },
    { 
      id: 5, 
      name: 'NIKE MERCURIAL SUPERFLY 10', 
      description: 'Obsessed with speed elite cleats', 
      brand: 'Nike', 
      price: 9600, 
      color: 'Blue', 
      image: 'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/z/m/zm_superfly_10_elite_fg_fq1454-400__01.jpg', 
      category: 'speed', 
      amount: 15,
      images: [
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/z/m/zm_superfly_10_elite_fg_fq1454-400__01.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/z/m/zm_superfly_10_elite_fg_fq1454-400__02.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/z/m/zm_superfly_10_elite_fg_fq1454-400__03.jpg',
        'https://www.arifootballstore.com/media/catalog/product/cache/6e478a31517304dced53ac4d3f3d5560/z/m/zm_superfly_10_elite_fg_fq1454-400__04.jpg'
      ],
      sizes: [
        { type_size: 'EUR', size: '40.5' },
        { type_size: 'EUR', size: '41.5' },
        { type_size: 'EUR', size: '42' },
        { type_size: 'EUR', size: '42.5' },
        { type_size: 'EUR', size: '43.5' },
        { type_size: 'EUR', size: '44' },
        { type_size: 'EUR', size: '45' },
        { type_size: 'US', size: '7.5' },
        { type_size: 'US', size: '8' },
        { type_size: 'US', size: '8.5' },
        { type_size: 'US', size: '9' },
        { type_size: 'US', size: '9.5' }
      ]
    }
  ],
  customers: [
    { id: 1, username: 'testuser', password: 'password123', email: 'test@example.com', first_name: 'John', last_name: 'Doe', phone: '0812345678', birthdate: '1990-01-01', gender: 'male', role: 'customer', token: 'mock-token-12345', access: 'mock-access-token', refresh: 'mock-refresh-token', user_id: 1 },
    { id: 2, username: 'admin', password: 'admin123', email: 'admin@example.com', first_name: 'Admin', last_name: 'User', phone: '0899999999', birthdate: '1985-01-01', gender: 'male', role: 'admin', token: 'mock-admin-token', access: 'mock-admin-access-token', refresh: 'mock-admin-refresh-token', user_id: 2 }
  ],
  addresses: [
    { id: 1, customer: 1, province: 'Bangkok', district: 'Dong Da', subDistrict: 'Dong Da', zipcode: '10110', address_details: '123/4 Thanon Road', phone: '0812345678', is_default: true }
  ],
  carts: [],
  orders: [],
  promotions: [
    { id: 1, code: 'SAVE10', discount_percent: 10, min_price: 100 },
    { id: 2, code: 'SAVE20', discount_percent: 20, min_price: 500 }
  ]
};

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));
const getNextId = (array) => (array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1);
const matchPath = (pattern, path) => {
  const patternParts = pattern.split('/');
  const pathParts = path.split('/');
  if (patternParts.length !== pathParts.length) return false;
  return patternParts.every((part, i) => part.startsWith(':') || part === pathParts[i]);
};

const getPathSegments = (config) => {
  try {
    const url = new URL(config.url, window.location.origin);
    return url.pathname.split('/').filter(Boolean);
  } catch {
    return (config.url || '').split('/').filter(Boolean);
  }
};

// API Handlers
const handlers = {
  'GET /api/products/': async () => ({ status: 200, data: mockData.products }),
  'GET /api/products/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[2]);
    const product = mockData.products.find(p => p.id === id);
    return product ? { status: 200, data: product } : { status: 404, data: { error: 'Not found' } };
  },
  'POST /api/products/': async (config) => {
    const newProduct = { id: getNextId(mockData.products), ...JSON.parse(config.data) };
    mockData.products.push(newProduct);
    return { status: 201, data: newProduct };
  },
  'PUT /api/products/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[2]);
    const index = mockData.products.findIndex(p => p.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    const updated = { ...mockData.products[index], ...JSON.parse(config.data) };
    mockData.products[index] = updated;
    return { status: 200, data: updated };
  },
  'DELETE /api/products/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[2]);
    const index = mockData.products.findIndex(p => p.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    mockData.products.splice(index, 1);
    return { status: 204, data: {} };
  },
  'POST /api/products/promotions/': async (config) => {
    const { code, summary_price } = JSON.parse(config.data);
    const promo = mockData.promotions.find(p => p.code.toLowerCase() === code.toLowerCase());
    if (!promo) return { status: 400, data: { error: 'Invalid code' } };
    if (summary_price < promo.min_price) return { status: 400, data: { error: `Minimum ${promo.min_price}` } };
    const discount = summary_price * (promo.discount_percent / 100);
    return { status: 200, data: { code: promo.code, discount_percent: promo.discount_percent, original_price: summary_price, discount_amount: discount, final_price: summary_price - discount } };
  },
  'POST /api/products/promotions/create/': async (config) => {
    const newPromo = { id: getNextId(mockData.promotions), ...JSON.parse(config.data) };
    mockData.promotions.push(newPromo);
    return { status: 201, data: newPromo };
  },
  'POST /api/auth/login/': async (config) => {
    const { username, password } = JSON.parse(config.data);
    const customer = mockData.customers.find(c => c.username === username && c.password === password);
    if (!customer) return { status: 401, data: { error: 'Invalid credentials' } };
    return { status: 200, data: { username: customer.username, email: customer.email, user_id: customer.id, role: customer.role, token: customer.token, access: customer.access, refresh: customer.refresh } };
  },
  'POST /api/token/refresh/': async () => {
    return { status: 200, data: { access: `mock-access-${Date.now()}` } };
  },
  'GET /api/customers/': async () => {
    return { status: 200, data: mockData.customers };
  },
  'POST /api/customers/register/': async (config) => {
    const newCustomer = { id: getNextId(mockData.customers), ...JSON.parse(config.data), role: 'customer', token: `mock-${Date.now()}`, access: `access-${Date.now()}`, refresh: `refresh-${Date.now()}`, user_id: getNextId(mockData.customers) };
    mockData.customers.push(newCustomer);
    return { status: 201, data: newCustomer };
  },
  'GET /api/customers/customer-addresses/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[3]);
    const addresses = mockData.addresses.filter(a => a.customer === id || a.id === id);
    return { status: 200, data: addresses.length ? addresses : mockData.addresses };
  },
  'POST /api/customers/customer-addresses/': async (config) => {
    const newAddress = { id: getNextId(mockData.addresses), ...JSON.parse(config.data) };
    mockData.addresses.push(newAddress);
    return { status: 201, data: newAddress };
  },
  'PUT /api/customers/customer-addresses/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[3]);
    const index = mockData.addresses.findIndex(a => a.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    const updated = { ...mockData.addresses[index], ...JSON.parse(config.data) };
    mockData.addresses[index] = updated;
    return { status: 200, data: updated };
  },
  'DELETE /api/customers/customer-addresses/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[3]);
    const index = mockData.addresses.findIndex(a => a.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    mockData.addresses.splice(index, 1);
    return { status: 204, data: {} };
  },
  'GET /api/customers/customer-cart/:id': async (config) => {
    const segments = getPathSegments(config);
    const userId = parseInt(segments[3]);
    const userCart = mockData.carts.filter(c => c.customer === userId);
    return { status: 200, data: userCart };
  },
  'POST /api/customers/customer-cart/': async (config) => {
    const newCartItem = { id: getNextId(mockData.carts), ...JSON.parse(config.data) };
    mockData.carts.push(newCartItem);
    return { status: 201, data: newCartItem };
  },
  'PUT /api/customers/cart/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[3]);
    const index = mockData.carts.findIndex(c => c.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    const updated = { ...mockData.carts[index], ...JSON.parse(config.data) };
    mockData.carts[index] = updated;
    return { status: 200, data: updated };
  },
  'DELETE /api/customers/cart/:id': async (config) => {
    const segments = getPathSegments(config);
    const id = parseInt(segments[3]);
    const index = mockData.carts.findIndex(c => c.id === id);
    if (index === -1) return { status: 404, data: { error: 'Not found' } };
    mockData.carts.splice(index, 1);
    return { status: 204, data: {} };
  },
  'POST /api/customers/orders/': async (config) => {
    const newOrder = { id: getNextId(mockData.orders), ...JSON.parse(config.data), status: 'pending', created_at: new Date().toISOString() };
    mockData.orders.push(newOrder);
    mockData.carts = mockData.carts.filter(c => c.customer !== newOrder.customer);
    return { status: 201, data: newOrder };
  },
  'GET /api/customers/orders/': async () => {
    return { status: 200, data: mockData.orders };
  },
  'PUT /api/customers/edit_orders/': async (config) => {
    const { order_id, status } = JSON.parse(config.data);
    const order = mockData.orders.find(o => o.id === order_id);
    if (!order) return { status: 404, data: { error: 'Not found' } };
    order.status = status;
    return { status: 200, data: order };
  },
  'POST /api/auth/password-reset/': async () => {
    return { status: 200, data: { message: 'Reset link sent' } };
  },
  'POST /api/auth/password_reset_confirm/:uidb64/:token': async () => {
    return { status: 200, data: { message: 'Reset successful' } };
  }
};

// Custom adapter for localhost:8000
// (Moved into initMockApi function)

// Initialize mock API
export const initMockApi = () => {
  // Create custom adapter for localhost:8000
  const mockAdapter = async (config) => {
    // Debug: log requests that hit the mock adapter
    // console.debug('[mockAdapter] request', config.method, config.url);

    // Add auth token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Handle non-localhost requests via fetch so external resources still load
    if (!config.url || !config.url.includes('localhost:8000')) {
      const fetchConfig = {
        method: config.method || 'get',
        headers: config.headers || {},
        body: config.data,
        credentials: 'same-origin'
      };
      const res = await fetch(config.url, fetchConfig);
      const contentType = res.headers.get('content-type') || '';
      const data = contentType.includes('application/json') ? await res.json() : await res.text();
      return {
        status: res.status,
        statusText: res.statusText,
        headers: {},
        config,
        data,
        request: {}
      };
    }

    const method = config.method ? config.method.toUpperCase() : 'GET';

    // Normalize the URL (strip query params / hash and normalize trailing slash)
    let fullUrl = config.url || '';
    let url;
    try {
      url = new URL(fullUrl, window.location.origin);
    } catch (e) {
      // Fallback to simple path extraction if URL constructor fails
      const splitAtQuery = fullUrl.split('?')[0];
      url = { pathname: splitAtQuery };
    }

    const normalize = (p) => {
      if (!p) return '/';
      // remove trailing slashes, except if it's just '/'
      const trimmed = p.replace(/\/+$/, '');
      return trimmed === '' ? '/' : trimmed;
    };

    const path = normalize(url.pathname.replace(/^\/+/, '/'));

    // Find handler (try exact and normalized matches)
    let handler = handlers[`${method} ${path}`] || handlers[`${method} ${path}/`];
    if (!handler) {
      for (const [pattern, h] of Object.entries(handlers)) {
        const [pMethod, pPathRaw] = pattern.split(' ');
        const pPath = normalize(pPathRaw);
        if (pMethod === method && matchPath(pPath, path)) {
          handler = h;
          break;
        }
      }
    }

    if (!handler) {
      console.error(`No mock handler for ${method} ${path}`);
      const error = new Error(`No mock handler for ${method} ${path}`);
      error.config = config;
      throw error;
    }

    // Execute handler
    await delay(300);
    const result = await handler(config);

    const response = {
      status: result.status,
      statusText: result.status === 204 ? 'No Content' : result.status >= 400 ? 'Error' : 'OK',
      headers: {},
      config,
      data: result.data,
      request: {}
    };

    if (result.status >= 400) {
      const error = new Error(result.data?.error || 'Request failed');
      error.response = response;
      error.config = config;
      throw error;
    }

    return response;
  };

  // Replace adapter
  axios.defaults.adapter = mockAdapter;

  // Also set up interceptor for safety
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

export default mockData;
