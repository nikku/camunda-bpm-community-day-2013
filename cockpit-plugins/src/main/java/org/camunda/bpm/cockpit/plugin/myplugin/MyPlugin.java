package org.camunda.bpm.cockpit.plugin.myplugin;

import java.util.HashSet;
import java.util.Set;

import org.camunda.bpm.cockpit.plugin.myplugin.resources.MyPluginRootResource;
import org.camunda.bpm.cockpit.plugin.spi.impl.AbstractCockpitPlugin;

/**
 *
 * @author nico.rehwaldt
 */
public class MyPlugin extends AbstractCockpitPlugin {

  public static final String ID = "myplugin";

  public String getId() {
    return ID;
  }

  @Override
  public Set<Class<?>> getResourceClasses() {
    Set<Class<?>> classes = new HashSet<Class<?>>();

    classes.add(MyPluginRootResource.class);

    return classes;
  }
}
