"use client";

import { useRouter } from "next/navigation";
import Drawer from "react-modern-drawer";
import { LuLayoutDashboard } from "react-icons/lu";
import React, { useId } from "react";

const Sidebar = ({ isOpen, toggleDrawer, categories }) => {
  const router = useRouter();

  return (
    <section>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        overlayOpacity={0}
        instanceId={useId()}
      >
        <div className="mt-2 mb-3 pe-0">
          <p className="fw-bold  fs-14 my-4 ps-4">Categories</p>
          <div>
            {categories?.map((category, i) => (
              <div
                className="d-flex cursor-pointer py-2 px-4  align-items-center"
                onClick={() => {
                  router.push(`/product?category_id=${category.id}`);
                  toggleDrawer();
                }}
                key={i}
              >
                <div>
                  <LuLayoutDashboard size={16} />
                </div>
                <div className="ms-3 pt-6">
                  <p className="mb-0  fs-12 fw-bold">
                    {category.name.toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </section>
  );
};
export default Sidebar;
