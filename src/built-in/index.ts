/**
 * @packageDocumentation
 * 
 * Welcome to the WebUI X built-in interfaces.
 * 
 * This module provides TypeScript interfaces and types designed to help you interact with core features of the WebUI X framework.
 * You will find definitions for application management, file handling, user management, package operations, and more.
 * 
 * These interfaces directly represent the native Java implementation (binding interfaces), providing a 1:1 mapping for seamless integration.
 * 
 * Note: Sanitized module IDs are only used for JavaScript interface access via the window object (e.g. window.$module_id) and are not used for file paths.
 * 
 * For best results, please refer to the official documentation for usage examples, best practices, and details about each interface.
 *
 * > WebUI X uses the MMRL Sanitized Module ID feature. Please visit the [documentation](https://mmrl.dev/guide/webuix/sanitized-ids) for more information.
 */

export * from "./ApplicationInterface";
export * from "./FileInputInterface";
export * from "./FileInterface";
export * from "./PackageManagerInterface";
export * from "./UserManagerInterface";
export * from "./ModuleInterface";
export * from "./WXApp";
export * from "./WXApplicationInfo";
export * from "./WXUserInfo";
export * from "./FileInputInterfaceStream";
