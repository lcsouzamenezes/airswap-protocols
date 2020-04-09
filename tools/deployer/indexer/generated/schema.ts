// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get isBlacklisted(): boolean {
    let value = this.get("isBlacklisted");
    return value.toBoolean();
  }

  set isBlacklisted(value: boolean) {
    this.set("isBlacklisted", Value.fromBoolean(value));
  }
}

export class Indexer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Indexer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Indexer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Indexer", id.toString(), this);
  }

  static load(id: string): Indexer | null {
    return store.get("Indexer", id) as Indexer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class Index extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Index entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Index entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Index", id.toString(), this);
  }

  static load(id: string): Index | null {
    return store.get("Index", id) as Index | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get indexer(): string {
    let value = this.get("indexer");
    return value.toString();
  }

  set indexer(value: string) {
    this.set("indexer", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    return value.toBytes();
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }
}

export class Locator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Locator entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Locator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Locator", id.toString(), this);
  }

  static load(id: string): Locator | null {
    return store.get("Locator", id) as Locator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get index(): string {
    let value = this.get("index");
    return value.toString();
  }

  set index(value: string) {
    this.set("index", Value.fromString(value));
  }

  get score(): BigInt {
    let value = this.get("score");
    return value.toBigInt();
  }

  set score(value: BigInt) {
    this.set("score", Value.fromBigInt(value));
  }

  get locator(): Bytes {
    let value = this.get("locator");
    return value.toBytes();
  }

  set locator(value: Bytes) {
    this.set("locator", Value.fromBytes(value));
  }
}

export class StakedAmount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedAmount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedAmount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedAmount", id.toString(), this);
  }

  static load(id: string): StakedAmount | null {
    return store.get("StakedAmount", id) as StakedAmount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get indexer(): string {
    let value = this.get("indexer");
    return value.toString();
  }

  set indexer(value: string) {
    this.set("indexer", Value.fromString(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get signerToken(): string {
    let value = this.get("signerToken");
    return value.toString();
  }

  set signerToken(value: string) {
    this.set("signerToken", Value.fromString(value));
  }

  get senderToken(): string {
    let value = this.get("senderToken");
    return value.toString();
  }

  set senderToken(value: string) {
    this.set("senderToken", Value.fromString(value));
  }

  get protocol(): Bytes {
    let value = this.get("protocol");
    return value.toBytes();
  }

  set protocol(value: Bytes) {
    this.set("protocol", Value.fromBytes(value));
  }

  get stakeAmount(): BigInt {
    let value = this.get("stakeAmount");
    return value.toBigInt();
  }

  set stakeAmount(value: BigInt) {
    this.set("stakeAmount", Value.fromBigInt(value));
  }
}
