import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UiButton from "./UiButton.vue";

describe("UiButton", () => {
  it("рендерит содержимое слота по умолчани", () => {
    const wrapper = mount(UiButton, { slots: { default: "Сохранить" } });
    expect(wrapper.text()).toBe("Сохранить");
  });

  it("рендерит слот icon", () => {
    const wrapper = mount(UiButton, {
      slots: { icon: '<span class="my-icon" />', default: "Удалить" },
    });

    expect(wrapper.find(".my-icon").exists()).toBe(true);
  });

  it("по умолчанию имеет type=button", () => {
    const wrapper = mount(UiButton);
    expect(wrapper.attributes("type")).toBe("button");
  });

  it("добавляет классы варианта и размера", () => {
    const wrapper = mount(UiButton, {
      props: { variant: "danger", size: "lg" },
    });

    expect(wrapper.classes()).toContain("ui-button--danger");
    expect(wrapper.classes()).toContain("ui-button--lg");
  });

  it("эмитит click по клику", async () => {
    const wrapper = mount(UiButton);

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("передаёт наружу нативное событие мыши", async () => {
    const wrapper = mount(UiButton);
    await wrapper.trigger("click");
    const [[event]] = wrapper.emitted("click")!;

    expect(event).toBeInstanceOf(MouseEvent);
  });

  describe("когда disabled", () => {
    it("не эмитит click", async () => {
      const wrapper = mount(UiButton, { props: { disabled: true } });

      await wrapper.trigger("click");
      expect(wrapper.emitted("click")).toBeUndefined();
    });

    it("ставит атрибут disabled на кнопку", () => {
      const wrapper = mount(UiButton, { props: { disabled: true } });
      expect(wrapper.attributes("disabled")).toBeDefined();
    });
  });
  describe("когда loading", () => {
    it("не эмитит click", async () => {
      const wrapper = mount(UiButton, { props: { loading: true } });
      await wrapper.trigger("click");
      expect(wrapper.emitted("click")).toBeUndefined();
    });

    it("сообщает о загрузке через aria-busy", () => {
      const wrapper = mount(UiButton, { props: { loading: true } });
      expect(wrapper.attributes("aria-busy")).toBe("true");
    });
  });

  it("не ставит aria-busy в обычном состоянии", () => {
    const wrapper = mount(UiButton);
    expect(wrapper.attributes("aria-busy")).toBeUndefined();
  });
});
