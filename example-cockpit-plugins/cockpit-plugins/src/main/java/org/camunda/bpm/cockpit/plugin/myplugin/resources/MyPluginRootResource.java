package org.camunda.bpm.cockpit.plugin.myplugin.resources;

import javax.ws.rs.Path;
import org.camunda.bpm.cockpit.plugin.resource.AbstractPluginRootResource;
import org.camunda.bpm.cockpit.plugin.myplugin.MyPlugin;

/**
 *
 * @author nico.rehwaldt
 */
@Path("plugin/" + MyPlugin.ID)
public class MyPluginRootResource extends AbstractPluginRootResource {

  public MyPluginRootResource() {
    super(MyPlugin.ID);
  }
}
