import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import UiIconButton from "./UiIconButton.vue";

describe("UiIconButton", () => {
  it("подставляет label в aria-label", () => {
    const wrapper = mount(UiIconButton, { props: { label: "Закрыть" } });

    expect(wrapper.attributes("aria-label")).toBe("Закрыть");
  });

  it("подставляет label в title", () => {
    const wrapper = mount(UiIconButton, { props: { label: "Закрыть" } });
    expect(wrapper.attributes("title")).toBe("Закрыть");
  });

  it("рендерит иконку из слота", () => {
    const wrapper = mount(UiIconButton, {
      props: { label: "Удалить" },
      slots: { default: '<svg class="my-icon" />' },
    });
    expect(wrapper.find(".my-icon").exists()).toBe(true);
  });

  it("добавляет класс ui-icon-button поверх классов кнопки", () => {
    const wrapper = mount(UiIconButton, { props: { label: "Закрыть" } });
    expect(wrapper.classes()).toContain("ui-icon-button");
    expect(wrapper.classes()).toContain("ui-button");
  });

  it("по умолчанию использует вариант ghost", () => {
    const wrapper = mount(UiIconButton, { props: { label: "" } });
    expect(wrapper.classes()).toContain("ui-button--ghost");
  });

  it("передаёт пропсы в UiButton", () => {
    const wrapper = mount(UiIconButton, {
      props: { label: "Удалить", variant: "danger", size: "lg" },
    });

    expect(wrapper.classes()).toContain("ui-button--danger");
    expect(wrapper.classes()).toContain("ui-button--lg");
  });

  it("пробрасывает клик наружу", async () => {
    const wrapper = mount(UiIconButton, { props: { label: "Закрыть" } });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("сохраняет реактивность пропсов при передаче", async () => {
    const wrapper = mount(UiIconButton, {
      props: { label: "Сохранить", loading: false },
    });
    expect(wrapper.find(".ui-button__spinner").exists()).toBe(false);

    await wrapper.setProps({ loading: true });
    expect(wrapper.find(".ui-button__spinner").exists()).toBe(true);
  });
});
