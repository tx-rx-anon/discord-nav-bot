'use strict';

const Discord = require('discord.js');
const Quest = require('./Quest');
const Task = require('./Task');

class TaskManager extends Discord.BaseManager {
  constructor(quest, iterable) {
    super(quest.message.client, iterable, Task);
    /**
     * The quest belonging to this manager
     * @type {Quest}
     */
    this.quest = quest;
  }

  /**
   * The quest cache of this manager
   * @type {Collection<Snowflake, Quest>}
   * @name QuestManager#cache
   */

  add(data, cache) {
    return super.add(data, cache, { extras: [this.guild] });
  }

  // /**
  //  * Obtains one or more quests from Discord, or the role cache if they're already available.
  //  * @param {Snowflake} [id] ID or IDs of the role(s)
  //  * @param {boolean} [cache=true] Whether to cache the new roles objects if it weren't already
  //  * @returns {Promise<Role|RoleManager>}
  //  * @example
  //  * // Fetch all roles from the guild
  //  * message.guild.roles.fetch()
  //  *   .then(roles => console.log(`There are ${roles.cache.size} roles.`))
  //  *   .catch(console.error);
  //  * @example
  //  * // Fetch a single role
  //  * message.guild.roles.fetch('222078108977594368')
  //  *   .then(role => console.log(`The role color is: ${role.color}`))
  //  *   .catch(console.error);
  //  */
  // async fetch(id, cache = true) {
  //   if (id) {
  //     const existing = this.cache.get(id);
  //     if (existing) return existing;
  //   }

  //   // We cannot fetch a single role, as of this commit's date, Discord API throws with 405
  //   const roles = await this.client.api.guilds(this.guild.id).roles.get();
  //   for (const role of roles) this.add(role, cache);
  //   return id ? this.cache.get(id) || null : this;
  // }

  // /**
  //  * Data that can be resolved to a Role object. This can be:
  //  * * A Role
  //  * * A Snowflake
  //  * @typedef {Role|Snowflake} RoleResolvable
  //  */

  // /**
  //  * Resolves a RoleResolvable to a Role object.
  //  * @method resolve
  //  * @memberof RoleManager
  //  * @instance
  //  * @param {RoleResolvable} role The role resolvable to resolve
  //  * @returns {?Role}
  //  */

  // /**
  //  * Resolves a RoleResolvable to a role ID string.
  //  * @method resolveID
  //  * @memberof RoleManager
  //  * @instance
  //  * @param {RoleResolvable} role The role resolvable to resolve
  //  * @returns {?Snowflake}
  //  */

  // /**
  //  * Creates a new role in the guild with given information.
  //  * <warn>The position will silently reset to 1 if an invalid one is provided, or none.</warn>
  //  * @param {Object} [options] Options
  //  * @param {RoleData} [options.data] The data to create the role with
  //  * @param {string} [options.reason] Reason for creating this role
  //  * @returns {Promise<Role>}
  //  * @example
  //  * // Create a new role
  //  * guild.roles.create()
  //  *   .then(console.log)
  //  *   .catch(console.error);
  //  * @example
  //  * // Create a new role with data and a reason
  //  * guild.roles.create({
  //  *   data: {
  //  *     name: 'Super Cool People',
  //  *     color: 'BLUE',
  //  *   },
  //  *   reason: 'we needed a role for Super Cool People',
  //  * })
  //  *   .then(console.log)
  //  *   .catch(console.error);
  //  */
  // create({ data = {}, reason } = {}) {
  //   if (data.color) data.color = resolveColor(data.color);
  //   if (data.permissions) data.permissions = Permissions.resolve(data.permissions);

  //   return this.guild.client.api
  //     .guilds(this.guild.id)
  //     .roles.post({ data, reason })
  //     .then(r => {
  //       const { role } = this.client.actions.GuildRoleCreate.handle({
  //         guild_id: this.guild.id,
  //         role: r,
  //       });
  //       if (data.position) return role.setPosition(data.position, reason);
  //       return role;
  //     });
  // }

  // /**
  //  * The `@everyone` role of the guild
  //  * @type {Role}
  //  * @readonly
  //  */
  // get everyone() {
  //   return this.cache.get(this.guild.id);
  // }

  // /**
  //  * The role with the highest position in the cache
  //  * @type {Role}
  //  * @readonly
  //  */
  // get highest() {
  //   return this.cache.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev), this.cache.first());
  // }
}

module.exports = TaskManager;
