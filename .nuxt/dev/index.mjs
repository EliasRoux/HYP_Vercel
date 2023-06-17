globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, fromNodeMiddleware, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, getQuery, createError } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/radix3/dist/index.mjs';
import express from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/express/index.js';
import { Sequelize, DataTypes } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/sequelize/lib/index.mjs';
import { loremIpsum } from 'file://C:/Users/elias/Desktop/DERNIER/HYP/node_modules/lorem-ipsum/dist/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{"baseURL":"http://localhost:3000"}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"C:/Users/elias/Desktop/DERNIER/HYP/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\elias\\Desktop\\DERNIER\\HYP","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\elias\\Desktop\\DERNIER\\HYP\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\elias\\Desktop\\DERNIER\\HYP\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\elias\\Desktop\\DERNIER\\HYP\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const dbInitialization = async (models) => {
  const projectModel = [
    {
      project_name: "EcoTech Solutions",
      project_areas: "Environment",
      supervisor_name: "Alex Turner",
      startup_presentation: "EcoTech Solutions is an innovative startup dedicated to developing sustainable solutions for environmental challenges. With a deep commitment to preserving and restoring the planet, they strive to create a greener and more sustainable future for generations to come. By leveraging cutting-edge technology and environmentally friendly practices, EcoTech Solutions aims to address critical issues such as renewable energy generation, waste management, and resource conservation.",
      startup_team: "At EcoTech Solutions, a passionate and diverse team of experts collaborates to drive positive change. Their team includes seasoned engineers, environmental scientists, business professionals, and sustainability experts. This multidisciplinary approach allows them to combine technical expertise, scientific knowledge, and strategic insights to tackle complex environmental issues. With a shared vision and a wealth of experience, the team at EcoTech Solutions is well-equipped to develop innovative and practical solutions that make a tangible impact on the environment.",
      product_service_presentation: "EcoTech Solutions' flagship product, EcoGen, is a groundbreaking renewable energy system that revolutionizes the way we generate and consume electricity. EcoGen harnesses the power of solar and wind energy, integrating advanced energy storage technology to ensure a consistent and reliable power supply. The system's smart grid capabilities enable efficient energy management, allowing users to optimize energy consumption and reduce reliance on traditional energy sources. By providing a sustainable and cost-effective solution, EcoGen empowers individuals, businesses, and communities to transition to clean and renewable energy sources, contributing to a greener and more sustainable future."
    },
    {
      project_name: "GreenCommute",
      project_areas: "Means of transportation;Environment",
      supervisor_name: "Alex Turner",
      startup_presentation: "GreenCommute is a visionary project that aims to transform urban transportation and reshape the way people commute. With a focus on reducing carbon emissions, alleviating traffic congestion, and promoting sustainable mobility options, GreenCommute envisions a future where transportation is efficient, environmentally friendly, and accessible to all. By leveraging technology and innovative solutions, GreenCommute seeks to create a seamless and interconnected transportation network that prioritizes sustainability and enhances the quality of urban living.",
      startup_team: "The team at GreenCommute comprises a diverse group of transportation experts, software engineers, urban planners, and user experience designers. With their collective knowledge and expertise, they work tirelessly to develop innovative solutions that address the complex challenges of urban mobility. By collaborating closely with public transportation agencies, local communities, and technology partners, the team at GreenCommute is committed to revolutionizing the way people move in cities and making sustainable transportation options readily available to all.",
      image_path: "~/assets/img/apple.png",
      product_service_presentation: "GreenCommute offers a comprehensive platform that integrates various sustainable transportation options, providing users with a convenient and eco-friendly alternative to traditional commuting methods. Their state-of-the-art mobile application empowers individuals to plan their commutes effectively, find the most efficient routes, and seamlessly switch between different modes of transportation, including ride-sharing, bike-sharing, and public transit. By leveraging real-time data, advanced algorithms, and intuitive user interfaces, GreenCommute aims to streamline urban transportation, reduce congestion, and encourage the adoption of sustainable mobility solutions."
    },
    {
      project_name: "MedTech Innovations",
      isTop5: true,
      project_areas: "Health",
      supervisor_name: "Sarah Thompson",
      startup_presentation: "MedTech Innovations is a trailblazing startup at the forefront of medical technology advancements. With a mission to improve patient care, enhance diagnosis accuracy, and revolutionize treatment outcomes, MedTech Innovations is transforming the healthcare landscape. By combining cutting-edge technologies, data-driven insights, and a deep understanding of healthcare challenges, they aim to empower medical professionals and improve the lives of patients around the world.",
      startup_team: "The highly skilled and multidisciplinary team at MedTech Innovations brings together a diverse range of talents and expertise. From biomedical engineers and software developers to healthcare professionals and regulatory specialists, their team is united by a common goal: to push the boundaries of medical technology innovation. With a deep understanding of the intricacies of the healthcare industry and a passion for making a difference, the team at MedTech Innovations is well-positioned to develop groundbreaking solutions that address critical medical challenges.",
      product_service_presentation: "MedTech Innovations offers a portfolio of cutting-edge medical devices and software solutions that revolutionize patient care. From advanced diagnostic imaging systems and precision surgical tools to AI-powered healthcare analytics platforms, their products empower medical professionals to deliver accurate diagnoses, personalized treatments, and improved patient outcomes. By embracing the latest technological advancements, MedTech Innovations is driving innovation in the healthcare industry and paving the way for a future where advanced medical technologies are accessible to all."
    },
    {
      project_name: "CleanWater Solutions",
      project_areas: "Health;Environment",
      supervisor_name: "Lauren Miller",
      startup_presentation: "CleanWater Solutions is a transformative project focused on tackling water pollution, promoting water conservation, and ensuring access to clean and safe water for all. With the global water crisis looming, CleanWater Solutions aims to develop innovative technologies and implement sustainable practices to protect and preserve our most precious resource - water. By collaborating with local communities, water management authorities, and environmental experts, CleanWater Solutions seeks to address the pressing challenges of water pollution, scarcity, and inequitable access.",
      startup_team: "The dedicated team at CleanWater Solutions comprises water resource management experts, environmental engineers, hydrologists, and sustainability advocates. With their deep understanding of water systems, environmental dynamics, and regulatory frameworks, they work diligently to develop comprehensive and effective solutions for water-related challenges. By leveraging their expertise in water treatment, conservation practices, and ecosystem restoration, the team at CleanWater Solutions is committed to safeguarding water resources and creating a sustainable water future.",
      product_service_presentation: "CleanWater Solutions offers an integrated suite of water management solutions that encompass water treatment, smart monitoring systems, and community engagement programs. Their advanced water treatment technologies remove contaminants, including pollutants and microorganisms, ensuring the delivery of clean and safe water to communities. Additionally, their smart monitoring systems provide real-time data on water quality, enabling proactive management and early detection of potential issues. Through community engagement programs, CleanWater Solutions educates and empowers individuals to participate in water conservation efforts, fostering a culture of responsible water usage and long-term sustainability."
    },
    {
      project_name: "BioGenetics",
      project_areas: "Health;Environment",
      supervisor_name: "Michelle Wong",
      startup_presentation: "BioGenetics is an innovative startup dedicated to leveraging genetic engineering and biotechnology to address critical challenges in healthcare and agriculture. With a focus on precision medicine, sustainable food production, and environmental conservation, BioGenetics aims to push the boundaries of scientific discovery and create a positive impact on society. By harnessing the power of genetic insights and advanced biotech tools, they strive to improve human health, enhance crop resilience, and protect biodiversity.",
      startup_team: "The exceptional team at BioGenetics is comprised of geneticists, bioengineers, data scientists, and sustainability experts who share a common vision of harnessing the potential of genetic innovation. Their diverse backgrounds and expertise enable them to tackle complex challenges at the intersection of biology, technology, and sustainability. With a deep commitment to ethical practices and responsible innovation, the team at BioGenetics is pioneering groundbreaking solutions that address pressing societal and environmental needs.",
      product_service_presentation: "BioGenetics offers a range of advanced genetic solutions and services that span multiple domains. In the healthcare sector, they develop personalized medicine approaches by analyzing individual genetic profiles, enabling precise diagnoses and targeted therapies. In agriculture, BioGenetics focuses on enhancing crop yields, improving nutritional content, and developing resilient varieties through genetic engineering techniques. Their sustainable agriculture solutions reduce the need for harmful pesticides and promote eco-friendly farming practices. Through their innovative products and services, BioGenetics is transforming industries and contributing to a more sustainable and healthier future."
    },
    {
      project_name: "GreenEats",
      project_areas: "Health;Environment",
      supervisor_name: "Michelle Wong",
      startup_presentation: "GreenEats is a visionary startup that aims to revolutionize the food industry by promoting sustainable and eco-friendly eating habits. With a mission to reduce the carbon footprint of the food sector and enhance the health and well-being of individuals, GreenEats offers innovative solutions that encourage mindful consumption and sustainable food choices. By leveraging technology, education, and community engagement, GreenEats envisions a future where nutritious, planet-friendly food is accessible to all.",
      startup_team: "The passionate team at GreenEats comprises food scientists, nutritionists, culinary experts, and sustainability advocates. With a shared commitment to promoting sustainable eating practices, they work collaboratively to develop innovative plant-based food alternatives, educational resources, and community programs. Their collective expertise and dedication drive the mission of GreenEats and empower individuals to make sustainable food choices.",
      product_service_presentation: "GreenEats offers a range of sustainable food products and services that cater to health-conscious consumers. Their plant-based food line includes delicious and nutritious alternatives to animal-based products, such as meat substitutes, dairy alternatives, and plant-based snacks. Additionally, GreenEats provides educational resources, recipe ideas, and workshops to empower individuals with the knowledge and skills to adopt sustainable eating habits. Through their initiatives, GreenEats aims to transform the food landscape, reduce the environmental impact of food production, and promote a healthier and more sustainable society."
    },
    {
      project_name: "SmartCity Solutions",
      project_areas: "Means of transportation;Environment",
      supervisor_name: "Michael Chen",
      startup_presentation: "The SmartCity Solutions project is dedicated to building smarter, more sustainable cities that enhance the quality of life for residents. By leveraging emerging technologies, data analytics, and citizen engagement, SmartCity Solutions aims to create intelligent urban environments that optimize resource utilization, improve connectivity, and prioritize the well-being of residents. With a focus on energy efficiency, smart mobility, and urban resilience, SmartCity Solutions envisions a future where cities are vibrant, inclusive, and sustainable.",
      startup_team: "The dynamic team at SmartCity Solutions comprises urban planners, data scientists, software engineers, and sustainability experts. With their diverse skill set and collective knowledge, they collaborate to develop innovative solutions for urban challenges. By working closely with local governments, businesses, and communities, the team at SmartCity Solutions co-creates smart city initiatives that address specific needs and foster long-term sustainability.",
      product_service_presentation: "SmartCity Solutions offers a suite of interconnected solutions designed to optimize urban infrastructure and improve the quality of life for residents. Their smart energy management systems enable efficient use of resources and promote renewable energy integration into city grids. Additionally, their intelligent transportation solutions enhance mobility by incorporating real-time data, traffic management algorithms, and smart public transit options. By harnessing the power of data analytics and innovative technologies, SmartCity Solutions empowers cities to become more resilient, sustainable, and people-centric."
    },
    {
      project_name: "EcoFashion",
      project_areas: "Environment",
      supervisor_name: "Jonathan Reed",
      startup_presentation: "EcoFashion is a pioneering startup that merges fashion with sustainability to revolutionize the apparel industry. With a vision to transform the way we produce, consume, and dispose of clothing, EcoFashion offers stylish and eco-friendly alternatives that minimize the environmental impact of fashion. By promoting ethical practices, circular economy principles, and conscious consumerism, EcoFashion aims to create a more sustainable and equitable fashion ecosystem.",
      startup_team: "The talented team at EcoFashion comprises fashion designers, textile experts, sustainability consultants, and supply chain specialists. With their deep understanding of the fashion industry and a commitment to responsible practices, they work tirelessly to develop innovative and eco-friendly clothing lines. Through collaboration with sustainable material suppliers, manufacturers, and industry partners, the team at EcoFashion aims to drive systemic change within the fashion industry.",
      product_service_presentation: "EcoFashion offers a range of sustainable clothing options that combine style, comfort, and eco-consciousness. Their products feature ethically sourced materials, such as organic cotton, recycled fabrics, and innovative eco-textiles. By implementing sustainable manufacturing processes and adopting circular design principles, EcoFashion minimizes waste, reduces carbon emissions, and promotes a more sustainable fashion lifecycle. Through their collections, EcoFashion inspires individuals to embrace sustainable fashion choices and contribute to a greener and more responsible industry."
    },
    {
      project_name: "CleanAir Technologies",
      isTop5: true,
      project_areas: "Health;Environment",
      supervisor_name: "Emily Johnson",
      startup_presentation: "CleanAir Technologies is a groundbreaking project that aims to combat air pollution and improve air quality in urban areas. With a focus on reducing harmful emissions, promoting clean energy solutions, and implementing smart city strategies, CleanAir Technologies seeks to create healthier and more livable environments for communities. By leveraging advanced technologies, data-driven insights, and policy advocacy, they aim to mitigate the detrimental impacts of air pollution on public health and the environment.",
      startup_team: "The dedicated team at CleanAir Technologies comprises environmental engineers, air quality scientists, data analysts, and policy experts. Their diverse expertise enables them to develop comprehensive air pollution control strategies, implement monitoring systems, and advocate for effective policies. Through collaboration with local governments, research institutions, and community organizations, the team at CleanAir Technologies drives impactful initiatives that improve air quality and promote sustainable urban development.",
      product_service_presentation: "CleanAir Technologies offers a range of solutions and services aimed at monitoring, analyzing, and mitigating air pollution. Their advanced air quality monitoring systems provide real-time data on pollutant levels, enabling proactive measures to protect public health. Additionally, CleanAir Technologies develops customized emission reduction strategies for industries, transportation networks, and urban areas, leveraging clean energy technologies, smart transportation systems, and effective policy frameworks. By integrating cutting-edge technologies and innovative approaches, CleanAir Technologies is committed to creating cleaner and healthier environments for all."
    },
    {
      project_name: "NanoPort",
      isTop5: true,
      project_areas: "Means of transportation",
      supervisor_name: "Andrew Lee",
      startup_presentation: "NanoPort is a groundbreaking project aimed at revolutionizing the shipping industry through the development of the very first matter teleportation device. While initially limited to small objects, NanoPort has the potential to transform the way goods are transported, particularly in the realm of high-value, time-sensitive items. By leveraging cutting-edge quantum teleportation technology and advanced material science, NanoPort aims to offer unparalleled speed, precision, and security in the movement of small-scale cargo.",
      startup_team: "The NanoPort team consists of world-renowned physicists, engineers, and materials scientists who have dedicated their expertise to the development of quantum teleportation technology. Ethical considerations regarding the testing and use of this technology on living beings have been thoroughly debated within the team and with external stakeholders, leading NanoPort to focus solely on non-living cargo for the time being. The team's commitment to ethical practices and responsible innovation drives their efforts to ensure that the development and application of NanoPort technology align with societal values and safety standards.",
      product_service_presentation: "NanoPort's matter teleportation device enables the near-instantaneous transfer of small objects from one location to another by disassembling and reconstructing matter at the quantum level. This transformative technology offers unprecedented speed and efficiency, reducing shipping times and costs for small-scale cargo. While the project acknowledges ongoing ethical debates surrounding the use and testing of this technology on living beings, NanoPort has chosen to prioritize its application in non-living cargo transportation. By focusing on high-value, time-sensitive items, NanoPort aims to provide a secure and efficient logistics solution for industries such as pharmaceuticals, electronics, and specialized manufacturing."
    },
    {
      project_name: "MaglevTech",
      isTop5: true,
      project_areas: "Andrew Lee",
      supervisor_name: "Means of transportation",
      startup_presentation: "MaglevTech is a dynamic startup focused on revolutionizing public transportation through the development of high-speed and energy-efficient magnetic levitation (maglev) technology. With a vision to transform the way people commute, MaglevTech aims to create a sustainable, fast, and reliable means of transportation that will alleviate congestion, reduce carbon emissions, and enhance the overall travel experience.",
      startup_team: "The talented team at MaglevTech consists of engineers, designers, and transportation experts who are passionate about reshaping urban mobility. With a strong background in maglev technology and advanced engineering, the team is committed to building a next-generation transportation system that is not only fast but also extremely energy-efficient. By optimizing magnetic levitation, propulsion systems, and aerodynamics, the team at MaglevTech strives to push the boundaries of speed and sustainability in public transportation.",
      product_service_name: "MaglevTech's flagship product is a high-speed train-like transportation system that utilizes magnetic levitation technology to achieve rapid speeds with minimal energy consumption. By eliminating friction and using powerful magnetic forces, MaglevTech's trains can reach remarkable speeds while providing a smooth and comfortable ride. The energy efficiency of the system reduces environmental impact and offers a sustainable alternative to conventional transportation. With cutting-edge safety features, advanced control systems, and smart connectivity, MaglevTech aims to enhance the efficiency and convenience of public transportation, making travel faster, greener, and more enjoyable.",
      product_service_presentation: ""
    },
    {
      project_name: "CleanEnergy Innovations",
      project_areas: "Environment",
      supervisor_name: "Emily Johnson",
      startup_presentation: "CleanEnergy Innovations is a pioneering startup focused on advancing renewable energy technologies and accelerating the transition to a clean energy future. With a commitment to reducing greenhouse gas emissions and promoting sustainable energy solutions, CleanEnergy Innovations aims to revolutionize the energy sector. By developing innovative clean energy technologies, advocating for supportive policies, and driving public awareness, they are at the forefront of the clean energy revolution.",
      startup_team: "The dynamic team at CleanEnergy Innovations comprises engineers, researchers, data scientists, and policy experts who are passionate about renewable energy. With their diverse backgrounds and expertise, they collaborate to develop groundbreaking technologies, such as solar power systems, wind energy solutions, energy storage technologies, and grid optimization tools. Through their collective knowledge and innovation, the team at CleanEnergy Innovations is driving the transition to a clean and sustainable energy future.",
      product_service_presentation: "CleanEnergy Innovations offers a range of clean energy solutions designed to meet the growing global demand for sustainable power generation. Their product portfolio includes advanced solar panels, wind turbines, energy storage systems, and smart grid technologies. By providing reliable, cost-effective, and environmentally friendly energy solutions, CleanEnergy Innovations empowers individuals, businesses, and communities to reduce their carbon footprint and embrace clean energy alternatives."
    },
    {
      project_name: "Sustainable Transport",
      project_areas: "eans of transportation;Environment",
      supervisor_name: "David Patel",
      startup_presentation: "The SustainableTransport project is dedicated to revolutionizing transportation systems by promoting sustainable and low-carbon alternatives. With a focus on reducing greenhouse gas emissions, improving air quality, and enhancing mobility, SustainableTransport aims to create efficient, equitable, and environmentally friendly transportation networks. By integrating clean technologies, innovative mobility solutions, and policy advocacy, they are driving the transition towards a sustainable transportation future.",
      startup_team: "The dedicated team at SustainableTransport comprises transportation planners, engineers, data analysts, and sustainability experts. Their collective expertise enables them to develop comprehensive transportation strategies, implement smart mobility solutions, and advocate for policies that support sustainable transportation practices. Through collaboration with government agencies, public transit authorities, and technology providers, the team at SustainableTransport works to improve transportation efficiency, accessibility, and sustainability.",
      product_service_presentation: "SustainableTransport offers a range of solutions and services aimed at transforming transportation systems into sustainable and inclusive networks. Their offerings include electric vehicle charging infrastructure, intelligent transportation systems, multimodal transportation planning, and data-driven transportation analytics. By promoting electric and shared mobility options, optimizing transportation networks, and integrating sustainable transportation modes, SustainableTransport is paving the way for greener and more efficient mobility solutions."
    },
    {
      project_name: "HealthTech Solutions",
      project_areas: "Health",
      supervisor_name: "Jennifer Ramirez",
      startup_presentation: "HealthTech Solutions is an innovative startup that leverages technology to revolutionize healthcare delivery and improve patient outcomes. With a focus on digital health, telemedicine, and personalized healthcare solutions, HealthTech Solutions aims to transform the healthcare landscape. By harnessing the power of data, connectivity, and artificial intelligence, they empower individuals to take control of their health and enable healthcare providers to deliver more efficient and personalized care.",
      startup_team: "The talented team at HealthTech Solutions comprises healthcare professionals, software engineers, data scientists, and user experience designers. Together, they develop cutting-edge health technologies, intuitive mobile applications, and data-driven platforms that enhance healthcare accessibility, efficiency, and patient engagement. By bridging the gap between technology and healthcare, the team at HealthTech Solutions is committed to improving the well-being of individuals and transforming the healthcare experience.",
      product_service_presentation: "HealthTech Solutions offers a suite of digital health solutions and services that empower individuals to proactively manage their health. Their products include mobile health applications, wearable devices, and remote monitoring systems that enable individuals to track and monitor their vital signs, manage chronic conditions, and access personalized health information. Additionally, HealthTech Solutions provides healthcare providers with integrated platforms for telemedicine, electronic health records, and data analytics, facilitating efficient and patient-centric healthcare delivery."
    },
    {
      project_name: "Sustainable Agriculture",
      isTop5: true,
      project_areas: "Environment",
      supervisor_name: "Lauren Miller",
      startup_presentation: "The Sustainable Agriculture Initiative is a transformative project aimed at promoting sustainable farming practices, ensuring food security, and safeguarding the environment. By integrating innovative technologies, regenerative farming methods, and community engagement, the Sustainable Agriculture Initiative seeks to create a resilient and sustainable food system. With a focus on promoting sustainable farming techniques, minimizing environmental impact, and fostering collaboration across the agricultural value chain, the project envisions a future where agriculture nourishes both people and the planet.",
      startup_team: "The passionate and dedicated team at the Sustainable Agriculture Initiative comprises agricultural scientists, agronomists, environmentalists, and community development specialists. Together, they work to develop and implement sustainable farming practices, such as organic farming, precision agriculture, and agroforestry. By collaborating with farmers, policymakers, and industry stakeholders, the team at the Sustainable Agriculture Initiative drives the adoption of sustainable agricultural practices and supports farmers in transitioning to more environmentally friendly and economically viable methods.",
      product_service_presentation: "The Sustainable Agriculture Initiative offers a range of services and resources designed to support sustainable farming practices. These include training programs, knowledge sharing platforms, and access to innovative agricultural technologies. By providing farmers with the tools and knowledge they need to implement sustainable farming practices, the Sustainable Agriculture Initiative promotes soil health, biodiversity conservation, and responsible resource management, ultimately contributing to a more sustainable and resilient food system."
    }
  ];
  await models.Project.bulkCreate(projectModel);
  const teamModel = [
    {
      name: "Queen Elizabeth II",
      image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1188052265.jpg?resize=1200:*",
      education: "Born with a reserved spot at Cambridge University, Queen Elizabeth II graduated during the Second World War. She got her Bachelor's Degree in Colonizing with honours.",
      job_experience: "Queen, Founder and CEO of Ivy Ventures",
      main_expertise: "Being a CEO",
      projects_supervised: "None",
      projects_id: "None",
      role: "CEO"
    },
    {
      name: "Emily Johnson",
      image: "https://media.licdn.com/dms/image/D5603AQHqMF68Wurang/profile-displayphoto-shrink_800_800/0/1664888408907?e=2147483647&v=beta&t=EHWkbADvfeXTDrbNbB_tnZkmY-U44UlmcwDUCdw28Sw",
      education: "Emily holds a Master's degree in Business Administration from Stanford University, specializing in Finance.",
      job_experience: "Emily brings a wealth of experience to Ivy Ventures. Prior to joining the firm, she worked as an Investment Analyst at a renowned investment firm, where she played a crucial role in evaluating potential investment opportunities. Her responsibilities included conducting comprehensive due diligence, performing financial modeling and analysis, and researching market trends. Emily's attention to detail and analytical skills enabled her to identify promising investments in various industries.",
      main_expertise: "Emily's expertise lies in the intersection of venture capital and the environment. She has a deep understanding of renewable energy, clean technology, and green infrastructure projects. Emily closely monitors the latest developments in sustainability and identifies startups that have the potential to make a significant environmental impact while delivering strong financial returns.",
      projects_supervised: "Clean Air Technologies,CleanEnergy Innovations",
      projects_id: "9,12",
      role: "Investment Analyst"
    },
    {
      name: "Andrew Lee",
      image: "https://images.squarespace-cdn.com/content/v1/5cff9a17d09a1400017de473/1560258640331-3RAEJH0ELYNADERTW3VF/Andrew+Lee+Professional+Headshot+Photo",
      education: "Andrew completed his Bachelor's degree in Economics from Harvard University, followed by an MBA from Wharton School of the University of Pennsylvania.",
      job_experience: "Andrew's prior experience in the field of venture capital has honed his skills in investment analysis and strategic decision-making. He spent several years as a Management Consultant at a top-tier consulting firm, where he advised clients on strategic investments and business development initiatives. Andrew excelled in conducting in-depth market research, analyzing financial data, and developing growth strategies for businesses across various sectors. His experience provided him with a comprehensive understanding of the due diligence process and the critical factors that drive successful investment outcomes.",
      main_expertise: "Andrew's main area of expertise lies in the means of transportation sector. He has a keen interest in emerging technologies such as electric vehicles, autonomous transportation systems, and sustainable logistics. Andrew closely follows industry trends and market dynamics to identify startups that are disrupting traditional transportation models and have the potential to shape the future of mobility.",
      projects_supervised: "NanoPort,MaglevTech",
      projects_id: "10,11",
      role: "Investment Manager"
    },
    {
      name: "Sarah Thompson",
      image: "https://media.licdn.com/dms/image/C5603AQF6wEa94tHuLQ/profile-displayphoto-shrink_800_800/0/1653686039780?e=2147483647&v=beta&t=7Lc2Max9N-dOgU_J4jnqmlca7Z8C1k6i0kUzvIae0p8",
      education: "Sarah holds a Bachelor's degree in Biomedical Engineering from MIT, with a minor in Business Management.",
      job_experience: "Sarah's journey in the venture capital industry began after gaining valuable experience as a Research Scientist at a leading pharmaceutical company. During her time there, she contributed to the development of innovative medical devices and drug delivery systems, leveraging her technical expertise in biomedical engineering. Additionally, Sarah gained experience in project management, collaborating with cross-functional teams and overseeing the successful execution of projects. Her role also involved conducting intellectual property evaluations and assessing the commercial potential of scientific discoveries.",
      main_expertise: "Sarah's primary area of expertise is health. She combines her technical background in biomedical engineering with a deep understanding of the healthcare industry to evaluate investment opportunities in areas such as digital health, medical technology, and biotechnology. Sarah is particularly passionate about leveraging technology to improve patient care and wellness, and she actively seeks out startups that are revolutionizing healthcare delivery and driving positive outcomes.",
      projects_supervised: "MedTech Innovations",
      projects_id: "3",
      role: "Portfolio Manager"
    },
    {
      name: "Michael Chen",
      image: "https://media.licdn.com/dms/image/C5603AQGxjYU-qg21Eg/profile-displayphoto-shrink_800_800/0/1522118947763?e=2147483647&v=beta&t=8x_EJezY9ndtBXsTtbCvj2hpxtqbuL0zXRQcdzEb8Zg",
      education: "Michael graduated from Stanford University with a Bachelor's degree in Computer Science and a minor in Business Administration.",
      job_experience: "Michael's journey in venture capital began after gaining significant experience as a Software Engineer at a prominent technology company. In this role, he specialized in developing scalable software solutions, leveraging data analytics for business optimization, and collaborating with cross-functional teams to deliver high-quality products. Michael's experience equipped him with a solid foundation in problem-solving, critical thinking, and project management.",
      main_expertise: "Michael's main area of expertise is at the intersection of technology and venture capital. His strong technical skills, coupled with his understanding of emerging technologies such as artificial intelligence, blockchain, and cybersecurity, make him adept at identifying investment opportunities in the tech sector. Michael closely monitors the technological landscape and seeks out startups that have the potential to disrupt industries and create transformative solutions.",
      projects_supervised: "SmartCity Solutions",
      projects_id: "7",
      role: "CFO"
    },
    {
      name: "Lauren Miller",
      image: "https://media.licdn.com/dms/image/D4E03AQEJXiP7yTBH5g/profile-displayphoto-shrink_800_800/0/1674008445370?e=2147483647&v=beta&t=86PdQMoakkDpX2nBQwmVPfZ7FxmtMQZDkzmm2gRZoT4",
      education: "Lauren holds a Master's degree in Environmental Science from Columbia University, with a focus on sustainability and resource management.",
      job_experience: "Lauren's professional journey in sustainability began as a Sustainability Consultant, where she assisted businesses in integrating environmentally responsible practices into their operations. In this role, she conducted sustainability assessments, identified areas for improvement, and developed customized strategies to minimize environmental impact. Lauren also gained experience in conducting environmental impact assessments, helping organizations navigate regulatory requirements, and advising on sustainable supply chain management.",
      main_expertise: "Lauren specializes in environmental sustainability. Her expertise encompasses a wide range of areas, including renewable energy projects, circular economy models, sustainable supply chains, and green infrastructure. Lauren's deep knowledge of sustainable practices, coupled with her ability to identify viable investment opportunities, enables Ivy Ventures to make environmentally conscious investments that generate both positive financial returns and lasting environmental impact.",
      projects_supervised: "CleanWater Solutions,Sustainable Agriculture Initiative",
      projects_id: "4,15",
      role: "CTO"
    },
    {
      name: "David Patel",
      image: "https://image.tmdb.org/t/p/original/jt08kAMlC7s9MJ8PupHBUjY0Ruc.jpg",
      education: "David completed his Bachelor's degree in Finance from the London School of Economics and Political Science.",
      job_experience: "David's extensive experience as an Investment Banker at a global financial institution provides him with a comprehensive understanding of the investment landscape and deal execution. He played a pivotal role in advising clients on mergers and acquisitions, capital raising, and strategic transactions. David's responsibilities included conducting financial analysis, modeling complex financial structures, and negotiating deals. His experience in conducting due diligence and assessing investment opportunities equips him with the skills needed to identify ventures with strong growth potential.",
      main_expertise: "David's area of expertise lies in financial analysis and deal execution. He leverages his deep understanding of capital markets, financial modeling, and valuation techniques to evaluate investment opportunities and structure deals that align with Ivy Ventures' investment strategy. David's expertise contributes to the firm's ability to make sound investment decisions and create value for both portfolio companies and investors.",
      projects_supervised: "Sustainable Transport",
      projects_id: "13",
      role: "Office Manager"
    },
    {
      name: "Jennifer Ramirez",
      image: "https://media.licdn.com/dms/image/C4E03AQFgb4DJn7uGww/profile-displayphoto-shrink_800_800/0/1619027283046?e=2147483647&v=beta&t=85y8BCpi-0fXDwu0werG84-Xq7WcQ3j12ymMIoarSkw",
      education: "Jennifer holds a Master's degree in Public Health from Johns Hopkins University, with a specialization in health policy and management.",
      job_experience: "Jennifer's previous role as a Health Policy Analyst at a leading research institute has equipped her with a strong foundation in healthcare policy, research, and analysis. She played a crucial role in conducting policy research, analyzing healthcare trends, and providing strategic recommendations to government agencies and healthcare organizations. Jennifer's experience involved evaluating the impact of policies on public health, conducting cost-effectiveness analyses, and developing evidence-based strategies to improve health outcomes.",
      main_expertise: "Jennifer's area of expertise lies in health policy and healthcare innovation. She possesses a deep understanding of the regulatory landscape, reimbursement models, and emerging trends in the healthcare industry. Jennifer closely monitors advancements in digital health, telemedicine, and personalized medicine, identifying startups that have the potential to revolutionize healthcare delivery and improve patient outcomes. Her expertise allows Ivy Ventures to navigate the complex healthcare landscape and invest in ventures that have the potential to drive positive change.",
      projects_supervised: "HealthTech Solutions",
      projects_id: "14",
      role: " Lead Software Engineer"
    },
    {
      name: "Alex Turner",
      image: "https://media.licdn.com/dms/image/D5603AQFbMJlwuWTQ1Q/profile-displayphoto-shrink_800_800/0/1668480744091?e=1692230400&v=beta&t=8qINgtzIGPkrV897IMNb7dRqKdplFfdHnDaQuMPc78I",
      education: "Alex graduated with a Bachelor's degree in Economics from Princeton University, with a minor in Environmental Studies.",
      job_experience: "Alex's experience at a sustainable investment firm as a Senior Analyst provided him with valuable insights into impact investing and sustainable business practices. His responsibilities included conducting financial analysis, impact assessments, and due diligence for companies operating in the renewable energy and clean technology sectors. Alex actively participated in evaluating investment opportunities, identifying key ESG (environmental, social, and governance) factors, and assessing the potential for long-term sustainability and profitability.",
      main_expertise: "Alex's main area of expertise is sustainable investing. He possesses a deep understanding of impact investing frameworks, ESG considerations, and sustainable business models. Alex's expertise helps Ivy Ventures evaluate investment opportunities that align with their commitment to environmental and social responsibility. He actively seeks out ventures that demonstrate strong environmental stewardship, social impact, and financial performance, thereby contributing to a sustainable future.",
      projects_supervised: "EcoTech Solutions,GreenCommute",
      projects_id: "1,2",
      role: "Sales Manager"
    },
    {
      name: "Michelle Wong",
      image: "https://mcmillan.ca/wp-content/uploads/2021/01/Michelle-Wong_MOBILE.jpg",
      education: "Michelle holds a Bachelor's degree in Biochemistry from the University of California, Berkeley, and an MBA from INSEAD.",
      job_experience: "Michelle's journey in the biotech industry began as a Senior Analyst at a leading biotechnology company, where she conducted in-depth market research, competitive analysis, and commercialization strategies for novel therapeutics and medical devices. She collaborated with cross-functional teams to assess market demand, evaluate regulatory landscapes, and identify potential barriers to entry. Michelle's experience provided her with a comprehensive understanding of the biotech industry's complexities and the critical success factors for investment.",
      main_expertise: "Michelle's primary area of expertise lies in the biotech and healthcare sectors. Her strong scientific background, coupled with her business acumen, allows her to evaluate investment opportunities in areas such as pharmaceuticals, medical devices, diagnostics, and healthcare technology. Michelle actively seeks out startups that are developing breakthrough therapies, disruptive technologies, and innovative approaches to addressing unmet medical needs. Her expertise contributes to Ivy Ventures' ability to identify ventures with transformative potential and contribute to advancements in healthcare.",
      projects_supervised: "BioGenetics,GreenEats",
      projects_id: "5,6",
      role: "Software Engineer"
    },
    {
      name: "Jonathan Reed",
      image: "https://www.elysee.fr/cdn-cgi/image/width=760%2Cheight=1145/images/default/0001/13/22e85bb25185f2f19748178a2f46713c11a32913.jpg",
      education: "Jonathan completed his Bachelor's degree in Electrical Engineering from MIT, followed by an MBA from Harvard Business School. Fun fact, his twin brother is France's President",
      job_experience: "Jonathan's prior experience as a Product Manager at a leading technology company equipped him with a deep understanding of product development, technology commercialization, and market dynamics. In his role, he led cross-functional  in developing innovative products, defining product roadmaps, and collaborating with engineering, design, and marketing teams. Jonathan's experience involved conducting market research, gathering customer insights, and managing the product lifecycle from ideation to launch.",
      main_expertise: "Jonathan's main area of expertise lies in product development and technology commercialization. He has a keen eye for identifying market trends, understanding user needs, and translating them into successful product strategies. Jonathan actively seeks out startups that demonstrate strong product-market fit, disruptive technology, and exceptional user experience. His expertise contributes to Ivy Ventures' ability to evaluate technology-driven investment opportunities and identify ventures with high growth potential.",
      projects_supervised: "EcoFashion",
      projects_id: "8",
      role: "Accountant"
    }
  ];
  await models.Team.bulkCreate(teamModel);
  const areaModel = [
    {
      name: "Health",
      intro: "Health is a fundamental aspect of human well-being. Advancements in medical technology and healthcare are vital for improving quality of life and addressing global health challenges.Ivy Ventures recognizes the potential for startups to drive positive change in this field. By investing in health-focused startups, Ivy Ventures aims to contribute to the advancement of healthcare.",
      summary: "We have chosen to focus on health because we believe in the power of technology, data, and innovation to transform healthcare. By investing in HealthTech startups, telemedicine platforms, digital health solutions, and personalized medicine initiatives, we aim to enhance healthcare accessibility, efficiency, and quality. We seek out entrepreneurs who are developing groundbreaking technologies, leveraging artificial intelligence and data analytics, and creating patient-centric healthcare solutions. Our goal is to contribute to a healthcare system that is proactive, patient-centered, and capable of delivering better outcomes for individuals and communities. ",
      short_summary: "Health is a fundamental aspect of human well-being, and we believe that investing in advancements in healthcare is crucial for the betterment of society. The healthcare industry faces numerous challenges, including rising healthcare costs, inadequate access to care, and the need for personalized and preventive approaches. At Ivy Ventures, we are dedicated to supporting innovative startups and projects that revolutionize healthcare delivery and improve patient outcomes."
    },
    {
      name: "Transport",
      intro: "Transportation plays a crucial role in our modern society. However, the traditional modes of transportation come with challenges such as congestion, carbon emissions, and reliance on fossil fuels. The stakes are high as we seek to develop efficient, safe, and sustainable transportation solutions. Ivy Ventures focuses on startups that are revolutionizing means of transportation through major advancements.",
      summary: "We have chosen to focus on means of transportation because we believe in the transformative power of sustainable transportation solutions. By investing in innovative startups and projects that promote electric mobility, intelligent transportation systems, and shared transportation services, we aim to reduce emissions, improve air quality, and enhance the overall efficiency of transportation networks. Our portfolio includes startups that are developing electric vehicles, smart charging infrastructure, autonomous transportation technologies, and alternative transportation models. We work closely with entrepreneurs who share our vision of a cleaner, safer, and more accessible transportation future.",
      short_summary: "Transportation plays a crucial role in our daily lives, connecting people, goods, and ideas across the globe. However, traditional transportation systems heavily rely on fossil fuels, contributing to air pollution, carbon emissions, and traffic congestion. The need for sustainable and efficient means of transportation has never been more evident. At Ivy Ventures, we are committed to revolutionizing the transportation sector and shaping the future of mobility."
    },
    {
      name: "Ecology",
      intro: "The environment is one of the most pressing issues of our time, with challenges ranging from climate change and resource depletion to pollution and loss of biodiversity. The stakes are high as the health and well-being of our planet and future generations depend on finding sustainable solutions. Ivy Ventures recognizes the urgency to support startups in this field.",
      summary: "We have chosen to focus on the environment because we believe that environmental sustainability is key to building a prosperous and resilient future. By investing in and supporting innovative startups and projects that address environmental challenges, we aim to drive positive change and contribute to the creation of a sustainable planet. Our commitment to the environment encompasses a wide range of sectors, including renewable energy, waste management, sustainable agriculture, and green infrastructure. We seek out visionary entrepreneurs and cutting-edge technologies that have the potential to make a significant impact on environmental conservation, climate mitigation, and the transition to a circular economy.",
      short_summary: "At Ivy Ventures, we recognize the pressing challenges and stakes associated with environmental sustainability. The world is facing unprecedented environmental issues, including climate change, biodiversity loss, and resource depletion. These challenges not only pose significant risks to the planet but also affect human health, social equity, and economic stability. It is imperative that we take immediate and decisive action to protect and restore our environment."
    }
  ];
  await models.Area.bulkCreate(areaModel);
};

const __filename = fileURLToPath(globalThis._importMeta_.url);
const __dirname = path.dirname(__filename);
console.log("DIRNAME --> " + __dirname);
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite")
});
const app = express();
app.use(express.json());
async function initDB() {
  const models = {};
  await db.authenticate();
  models.Dog = db.define("dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  models.Location = db.define("location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  models.Project = db.define("project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startup_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startup_team: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isTop5: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    supervisor_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    project_areas: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // Add more columns as needed for your project table
  });
  models.Shit = db.define("shit", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startup_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    startup_team: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_presentation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    product_service_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // Add more columns as needed for your project table
  });
  models.Team = db.define("team", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    job_experience: {
      type: DataTypes.STRING,
      allowNull: true
    },
    main_expertise: {
      type: DataTypes.STRING,
      allowNull: true
    },
    projects_supervised: {
      type: DataTypes.STRING,
      //string with the names of the projects supervised, separated by a ","
      allowNull: true
    },
    projects_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  models.Area = db.define("area", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    intro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    short_summary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  models.Location.hasMany(models.Dog);
  models.Dog.belongsTo(models.Location);
  await db.sync({ force: true });
  await dbInitialization(models);
  return models;
}
async function initServer() {
  const models = await initDB();
  app.get("/dogs", async (req, res) => {
    const data = await models.Dog.findAll();
    res.status(200).json(data);
  });
  app.get("/projects", async (req, res) => {
    const data = await models.Project.findAll();
    res.status(200).json(data);
  });
  app.get("/teams", async (req, res) => {
    const data = await models.Team.findAll();
    res.status(200).json(data);
  });
  app.get("/dogs/:id", async (req, res) => {
    const data = await models.Dog.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: models.Location
        }
      ]
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/projects/:id", async (req, res) => {
    const data = await models.Project.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/teams/:id", async (req, res) => {
    const data = await models.Team.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/area", async (req, res) => {
    const data = await models.Area.findAll();
    res.status(200).json(data);
  });
  app.get("/area/:id", async (req, res) => {
    const data = await models.Area.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/area", async (req, res) => {
    const data = await models.Area.findAll();
    res.status(200).json(data);
  });
  app.get("/area/:id", async (req, res) => {
    const data = await models.Area.findOne({
      where: {
        id: req.params.id
      }
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.post("/dogs", async (req, res) => {
    const body = req.body;
    if (!body.age) {
      body.age = Math.floor(Math.random() * 14);
    }
    try {
      body.description = loremIpsum({
        count: 4,
        units: "paragraph"
      });
      body.locationId = 1;
      const record = await models.Dog.create(body);
      res.status(200).json({
        name: record.name,
        breed: record.breed,
        id: record.id
      });
    } catch {
      res.status(400).send();
    }
  });
  app.get("/locations", async (req, res) => {
    const data = await models.Location.findAll();
    res.status(200).json(data);
  });
  app.get("/locations/:id", async (req, res) => {
    const data = await models.Location.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: models.Dog
        }
      ]
    });
    if (data) {
      res.status(200).json(data);
    } else {
      res.sendStatus(404);
    }
  });
  app.get("/dogPageSSR/:id", async (req, res) => {
    const data = await models.Dog.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: models.Location
        }
      ]
    });
    if (data) {
      let str = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Dog Shelter - Dog Page</title>
                    <meta name = "description" content = "Page with all the information about the shelter for dogs">
                    <meta name = "keywords" content = "dog, shelter, information">
                    <meta name = "author" content = "Alberto Patti">
                    <link rel = "stylesheet" href = "/assets/css/general.css">
                    <link rel = "stylesheet" href = "/assets/css/dogPage.css">
                </head>
                <body>
                    <header>
                        <h1>The Dog Shelter</h1>
                        <nav>
                            <a href = "/index.html">HOME</a>
                            <a href = "/dogs.html">DOGS</a>
                            <a href = "/about.html">ABOUT US</a>
                            <a href = "/contact.html">CONTACT US</a>
                        </nav>
                    </header>
                    <main>
                        <div class = "info-group">
                            <img id = "main-img" src = "/assets/img/home-image.jpg" />
                            <div id = "data-container">
                                <p class = "data">Name: <span id = "dog-name">${data.name}</span></p>
                                <p class = "data">Breed: <span id = "dog-breed">${data.breed}</span></p>
                                <p class = "data">Age: <span id = "dog-age">${data.age}</span></p>
                            </div>
                        </div>
                        <h2>Description</h2>
                        <p id = "description">${data.description}</p>
                        <a id = "link" href = '/locationPage.html?id=${data.location.id}'>Link to ${data.location.name} in ${data.location.city}</a>
                    </main>
                    <footer>
                        Made by me :)
                    </footer>
                </body>
            </html>`;
      res.status(200).send(str);
    } else {
      res.sendStatus(404);
    }
  });
}
initServer();
console.log("SERVER INITIALIZED");
const _LCV9Rf = fromNodeMiddleware(app);

const _lazy_I13mAY = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_I13mAY, lazy: true, middleware: false, method: undefined },
  { route: '/server', handler: _LCV9Rf, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_I13mAY, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/elias/Desktop/DERNIER/HYP/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://C:/Users/elias/Desktop/DERNIER/HYP/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
